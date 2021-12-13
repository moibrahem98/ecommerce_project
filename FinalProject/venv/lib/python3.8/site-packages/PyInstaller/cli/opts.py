# -----------------------------------------------------------------------------
# Copyright (c) 2021, PyInstaller Development Team.
#
# Distributed under the terms of the GNU General Public License (version 2
# or later) with exception for distributing the bootloader.
#
# The full license is in the file COPYING.txt, distributed with this software.
#
# SPDX-License-Identifier: (GPL-2.0-or-later WITH Bootloader-exception)
# -----------------------------------------------------------------------------
import os

from typing import Tuple, List

import click
from click_option_group import optgroup, GroupedOption

from PyInstaller import DEFAULT_DISTPATH, DEFAULT_WORKPATH


def validate_datas_or_binaries(_, _p, value: Tuple[str]) -> List[str]:
    output = []
    for val in value:
        parts = val.split(os.pathsep)
        if len(parts) != 2:
            raise click.BadParameter(
                f'Expected value of format "SRC{os.pathsep}DEST", got "{val}" instead'
            )
        output.append(val)
    return output


def is_ident(value: str) -> bool:
    if all(x.isidentifier() for x in value.split('.')):
        return True
    raise click.BadParameter(
        f'{value} is not a valid identifier'
    )


def add_build_options(cmd: click.Command) -> click.Command:
    """
    Decorator which adds all build-arguments to a click command
    """
    cmd = optgroup.option(
        '--distpath', default=DEFAULT_DISTPATH, type=click.Path(),
        help='Where to put the bundled app (default: ./dist)'
    )(cmd)
    cmd = optgroup.option(
        '--workpath', default=DEFAULT_WORKPATH, type=click.Path(),
        help='Where to put all the temporary work files - .log, .pyz, etc. (default: ./build)'
    )(cmd)
    cmd = optgroup.option(
        '-y', '--noconfirm', is_flag=True, default=False,
        help='Replace output directory without asking for confirmation'
    )(cmd)
    cmd = optgroup.option(
        '--upx-dir', default=None, type=click.Path(),
        help='Path to UPX utility (default: search PATH)'
    )(cmd)
    cmd = optgroup.option(
        '-a', '--ascii', is_flag=True, default=False,
        help='Don\'t include unicode support (default: included if available)'
    )(cmd)
    cmd = optgroup.option(
        '--clean', is_flag=True, default=False,
        help='Clean PyInstaller cache and remove temporary files before building'
    )(cmd)
    cmd = optgroup('Output Options', help='Help')(cmd)

    return cmd


def add_logging_options(cmd: click.Command) -> click.Command:

    levels = ('TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'CRITICAL')

    cmd = optgroup.option(
        '--log-level', type=click.Choice(levels, case_sensitive=False),
        help='Amount of detail in build-time logging output.'
    )(cmd)
    cmd = optgroup('Logging')(cmd)

    return cmd


def add_makespec_options(cmd: click.Command) -> click.Command:

    # Group: Where to search
    cmd = optgroup.option(
        '--additional-hooks-dir', 'hookspath', multiple=True, type=click.Path(),
        help='Additional path to search for hooks. This option can be used multiple times.'
    )(cmd)
    cmd = optgroup.option(
        '-p', '--paths', multiple=True, type=click.Path(),
        help='A path to search for imports (like using PYTHONPATH). '
             f'Multiple paths are allowed, separated by ``{os.pathsep}``, or '
             'use this option multiple times. Equivalent to '
             'supplying the ``pathex`` argument in the spec file.'
    )(cmd)
    cmd = optgroup('Where to search')(cmd)

    # Group: What to bundle
    cmd = optgroup.option(
        '--runtime-hook', 'runtime_hooks', multiple=True, type=click.File(),
        help='Path to a custom runtime hook file. A runtime hook is code that '
             'is bundled with the executable and is executed before any '
             'other code or module to set up special features of the runtime '
             'environment. This option can be used multiple times.'
    )(cmd)
    cmd = optgroup.option(
        '--collect-metadata-recursive', multiple=True, metavar='MODULENAME',
        help='Recursively collect all metadata from the specified package and it\'s dependencies. '
             'This option can be use multiple times.'
    )(cmd)
    cmd = optgroup.option(
        '--collect-metadata', multiple=True, metavar='MODULENAME', type=click.UNPROCESSED,
        callback=lambda _, _p, value: [x for x in value if is_ident(x)],
        help='Collect all metadata from the specified package. '
             'This option can be use multiple times.'
    )(cmd)
    cmd = optgroup.option(
        '--collect-all', multiple=True, metavar='MODULENAME', type=click.UNPROCESSED,
        callback=lambda _, _p, value: [x for x in value if is_ident(x)],
        help='Collect all submodules, data files, metadata, and binaries from the specified package or module. '
             'This option can be use multiple times.'
    )(cmd)
    cmd = optgroup.option(
        '--collect-binaries', multiple=True, metavar='MODULENAME', type=click.UNPROCESSED,
        callback=lambda _, _p, value: [x for x in value if is_ident(x)],
        help='Collect all binaries from the specified package or module. '
             'This option can be use multiple times.'
    )(cmd)
    cmd = optgroup.option(
        '--collect-datas', multiple=True, metavar='MODULENAME', type=click.UNPROCESSED,
        callback=lambda _, _p, value: [x for x in value if is_ident(x)],
        help='Collect all data files from the specified package or module. '
             'This option can be use multiple times.'
    )(cmd)
    cmd = optgroup.option(
        '--collect-submodules', multiple=True, metavar='MODULENAME', type=click.UNPROCESSED,
        callback=lambda _, _p, value: [x for x in value if is_ident(x)],
        help='Collect all submodules from the specified package or module. '
             'This option can be used multiple times.'
    )(cmd)
    cmd = optgroup.option(
        '--excluded-import', 'excludes', multiple=True, metavar='MODULENAME', type=click.UNPROCESSED,
        callback=lambda _, _p, value: [x for x in value if is_ident(x)],
        help='Optional module (Python name) that will be ignored and not included, '
             'as if it was not found. This option can be used multiple times.'
    )(cmd)
    cmd = optgroup.option(
        '-H', '--hidden-import', '--hiddenimport', 'hiddenimports', multiple=True, metavar='MODULENAME',
        type=click.UNPROCESSED, callback=lambda _, _p, value: [x for x in value if is_ident(x)],
        help='An import not visible in the code of the script(s) or it\'s dependencies. '
             'This option can be used multiple times.'
    )(cmd)
    cmd = optgroup.option(
        '--add-binary', 'binaries', multiple=True, type=click.UNPROCESSED,
        callback=validate_datas_or_binaries, metavar=f'SRC{os.pathsep}DEST',
        help='Additional binary files to be added to the executable. See the `--add-data` '
             'option for more details. This option can be used multiple times.'
    )(cmd)
    cmd = optgroup.option(
        '--add-data', 'datas', multiple=True, type=click.UNPROCESSED,
        callback=validate_datas_or_binaries, metavar=f'SRC{os.pathsep}DEST',
        help='Additional non-binary files or folders to be added to the executable. '
             'The path separator is platform specific, `os.pathsep` (which is `;` on '
             'Windows and `:` on most unix systems) is used. This option can be used '
             'multiple times.'
    )(cmd)
    cmd = optgroup('What to bundle')(cmd)

    # Group: What to generate

    cmd = optgroup.option(
        '--upx-exclude', 'upx_exclude', multiple=True, metavar='FILE',
        help='Prevent a binary from being compressed when using upx. This is typically'
             ' used if upx corrupts certain binaries during compression. FILE is the '
             'filename of the binary without path. This option can be used multiple times.'
    )(cmd)
    cmd = optgroup.option(
        '--noupx', is_flag=True, default=False,
        help='Don\'t apply UPX regardless of availability'
    )(cmd)
    cmd = optgroup.option(
        '-s', '--strip', is_flag=True, default=False,
        help='Apply a symbol-table strip to the executable and shared libraries. '
             '(not recommended on Windows)'
    )(cmd)
    cmd = optgroup.option(
        '-d', '--debug', multiple=True,
        type=click.Choice(['all', 'imports', 'bootloader', 'noarchive']),
        help=(
            'Whether or not to build a debug version of your code. '
            'This option can be used multiple times to select '
            'several of the following items.\n\n'
            '- bootloader: enable the bootloader\'s logging feature, '
            '              which prints launch progress messages.\n\n'
            '- imports: specify the -v option to the bundled Python '
            'interpreter. See ``python --help -v`` for more information '
            'on the effects of this option.\n\n'
            '- noarchive: instead of storing all frozen Python source '
            'files inside the executable file, store them as files '
            'alongside it.'
        )
    )(cmd)
    cmd = optgroup.option(
        '--splash', type=click.File(),
        help='(EXPERIMENTAL) Add an splash screen with the image IMAGE_FILE to the application. '
             'The splash screen can display progress updates while unpacking.'
    )(cmd)
    cmd = optgroup.option(
        '--key', metavar='KEY', help='The key used to encrypt python bytecode'
    )(cmd)
    cmd = optgroup.option(
        '-F/-D', '--onefile/--onedir', 'onefile', default=False,
        help='Single file or single directory bundle (default: onedir)'
    )(cmd)
    cmd = optgroup.option(
        '--specpath', type=click.Path(), default='.',
        help='Folder to store the generated spec file in (default : current directory)'
    )(cmd)
    cmd = optgroup.option(
        '-n', '--name', type=click.STRING, required=False, metavar='NAME',
        help='Name to assign to the bundled app and spec file (default: first script\'s basename)'
    )(cmd)
    cmd = optgroup('What to generate')(cmd)

    return cmd
