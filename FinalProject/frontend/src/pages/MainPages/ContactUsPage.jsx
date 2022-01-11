import React from "react";
function ContactUs() {
  return (
    <>
      <div className="text-center contact-us">
        <h2>عننا</h2>
        <p>يسعدنا تقديم الخدمه لكم فى اى وقت </p>
        <p>العنوان: المحله الكبرى</p>

        <p>
          <p className="pl-1 d-inline-block">
            atif_aljamal@hotmail.com : بريد الكترونى
          </p>
          <br />
          تليفون <strong>002-01150508507</strong>
        </p>
        <div>
          <strong>ساعات العمل:</strong>
          <br />
          جميع ايام الاسبوع من 12 مساء الى 12 صباحا
        </div>
      </div>
    </>
  );
}

export default ContactUs;
