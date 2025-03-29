import { IoMdArrowBack } from "react-icons/io";
const Usemenu = () => {
    return (
        <div className="col-6 offset-1" style={{direction:"rtl"}}>
            <h3 style={{color:"#023047" , margin:"20px"}}>ورود</h3>
            <h5 style={{color:"#023047" }}>با شماره موبایل</h5>
            <input type="text"  placeholder="شماره تلفن" style={{width:"330px" , margin:"20px 0px" , backgroundColor:"#dee2e6" , border:"1px solid #277da1" , padding:"5px"}}/>
             <p>مرا به خاطر بسپار</p>
             <button className="btn btn-lg" style={{color:"white" , backgroundColor:"#14213d" , fontSize:"15px", padding:"10px 130px"}}><IoMdArrowBack />ادامه دهید </button>
             <h6 style={{color:"#adb5bd" , marginTop:"20px" , marginBottom:"50px"}}>آیا هنوز عضو نشده اید؟<span style={{color:"#023047" , border:"none"}}>ادامه ثبت نام کنید</span></h6>
        </div>);
}

export default Usemenu;