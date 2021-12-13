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

import click

from PyInstaller import __version__
from . import opts


@click.group()
@click.version_option(__version__)
@click.pass_context
def cli(_ctx: click.Context):
    pass


@cli.command('build')
@opts.add_logging_options
@opts.add_build_options
@opts.add_makespec_options
def build_cmd(**kwargs):
    print(kwargs)


def run():
    cli(prog_name='pyinstaller')
