import React from "react";
function ContactUs() {
  return (
    <>
      <div className="text-center contact-us">
        <h2>عن ميد ستور</h2>
        <p>يسعدنا تقديم الخدمه لكم فى اى وقت </p>
        <p>
          العنوان: المحله الكبرى شارع جراج الحناوي خلف مطعم رستو امام فيلا
          الشامى
        </p>

        <p>
          <p className="pl-1 d-inline-block">
            بريد الكترونى : atif_aljamal@hotmail.com
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
