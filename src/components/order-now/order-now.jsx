import React from "react";
import "./order-now.css";
const OrderNow = () => {
  return (
    <div className="">
      <div>
        <img src="/assets/images/11.png" alt="" />
      </div>
    <div className="order flex">
      <div className="container order-bg">

      <div className="order-right">
        <div>
          <h2>طلب خدمة او استفسار</h2>
          <p>الحقول التي عليها علامة مطلوبه</p>
        </div>
        <div className="order-form">
          <form>
            <input
              type="text"
              placeholder="الاسم"
              className="form-control"
              name="name"
            />
            <input
              type="text"
              placeholder="رقم الهلتف "
              className="form-control"
              name="email"
            />
            <div className="flex but-form">
                <button type="submit"><span> ارسال</span> <span className="semicircle"></span></button>
              </div>
          </form>
        </div>
      </div>

      <div className="order-left">
        <img src="/assets/images/Group-1.png" alt=""  />
      </div>
      </div>

    </div></div>
  );
};

export default OrderNow;
