import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { RiTelegramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between", 
        width: "100%",
        padding: "20px 5%",
        backgroundColor: "#f5cac3",
        direction: "rtl",
        flexWrap: "wrap",
      }}
    >
     
      <div style={{ textAlign: "center", flex: 1, minWidth: "250px" }}>
        <h4>ملشاین</h4>
        <p>درباره ما</p>
        <p>فرصت های شغلی در ملشاین</p>
        <p>تخفیف ویژه</p>
        <p>مجله زیبایی ملشاین</p>
      </div>

      
      <div style={{ textAlign: "center", flex: 1, minWidth: "250px" }}>
        <h4>خدمات مشتریان</h4>
        <p>دریافت مشاوره</p>
        <p>سوالات متداول</p>
        <p>راهنمای خرید و پرداخت</p>
        <p>شرایط ارسال</p>
        <p>شرایط مرجوعی</p>
        <p>ضمانت اصالت کالا</p>
        <p>ارتباط با پشتیبانی</p>
      </div>
      <div style={{ textAlign: "center", flex: 1, minWidth: "250px" }}>
        <p>ما را در شبکه های اجتماعی دنبال کنید</p>
        <div style={{ fontSize: "30px" }}>
          <IoLogoInstagram style={{ margin: "0 10px",border:"3px solid black" ,padding:"3px" ,fontSize:"35px",borderRadius:"8px",backgroundColor:"black",color:"#E5989B"}} />
          <RiTelegramLine style={{ margin: "0 10px",border:"3px solid black" ,padding:"3px" ,fontSize:"35px",borderRadius:"8px",backgroundColor:"black",color:"#E5989B" }} />
          <IoLogoWhatsapp style={{ margin: "0 10px",border:"3px solid black" ,padding:"3px" ,fontSize:"35px",borderRadius:"8px",backgroundColor:"black",color:"#E5989B" }} />
        </div>
      </div>

      <div style={{ textAlign: "center", flex: 1, minWidth: "250px" }}>
        <h4>نماد اعتماد الکترونیک</h4>
      </div>
    </div>
  );
};

export default Footer;
