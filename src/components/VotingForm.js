import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../App";
import { CloudinaryContext, Image } from "cloudinary-react";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const [zotang, setZotang] = useState("");
  const [zolia, setZolia] = useState("");
  const [idol, setIdol] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const delegate = { zotang, zolia, idol };

    const response = await fetch(`${API_URL}/api/delegates`, {
      method: "POST",
      body: JSON.stringify(delegate),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setZotang("");
      setZolia("");
      setIdol("");
      setError(null);

      dispatch({ type: "CREATE_WORKOUT", payload: json });
      //console.log(json);
      navigate("/");
    }
  };

  const customInputStyle = {
    padding: "10px",
    fontFamily: "Poppins",
    margin: "10px",
    width: "auto",
    border: "1px solid #ddd",
    boxSizing: "border-box",
  };

  /*
  <input
            className="radio-input"
            style={customInputStyle}
            type="radio"
            id="idol1"
            name="idol"
            value={process.env.REACT_APP_IDOL1}
            checked={idol === process.env.REACT_APP_IDOL1}
            onChange={(e) => setIdol(e.target.value)}
          />
          <label className="radio-label" htmlFor="idol1">
            <Image
              className="radio-image"
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1684816022/Idol1_Huai_Nu_vzhgwf.jpg"
              alt="idol1"
            />

            <span>{process.env.REACT_APP_IDOL1}</span>
          </label> */

  return (
    <CloudinaryContext cloudName="dklygsuz7">
      <form className="voting" onSubmit={handleSubmit}>
        <h4>Khat-ta teel in.</h4>
        <div className="vote">
          <label>Zotaang khat teel in:</label>
          <br />
          <input
            className="radio-input"
            style={customInputStyle}
            type="radio"
            id="zotang1"
            name="zotang"
            value={process.env.REACT_APP_ZOTANG1}
            checked={zotang === process.env.REACT_APP_ZOTANG1}
            onChange={(e) => setZotang(e.target.value)}
          />
          <label className="radio-label" htmlFor="zotang1">
            <Image
              className="radio-image"
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1716519962/Lian_Sut_Mung_OK_xdorel.jpg"
              alt="zotang1"
            />

            <span>{process.env.REACT_APP_ZOTANG1}</span>
          </label>

          <input
            className="radio-input"
            style={customInputStyle}
            type="radio"
            id="zotang2"
            name="zotang"
            value={process.env.REACT_APP_ZOTANG2}
            checked={zotang === process.env.REACT_APP_ZOTANG2}
            onChange={(e) => setZotang(e.target.value)}
          />
          <label className="radio-label" htmlFor="zotang2">
            <Image
              className="radio-image"
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1716520549/Thang_Deih_Lian_NC_ngkjoa.jpg"
              alt="zotang2"
            />

            <span>{process.env.REACT_APP_ZOTANG2} </span>
          </label>

          <input
            className="radio-input"
            style={customInputStyle}
            type="radio"
            id="zotang3"
            name="zotang"
            value={process.env.REACT_APP_ZOTANG3}
            checked={zotang === process.env.REACT_APP_ZOTANG3}
            onChange={(e) => setZotang(e.target.value)}
          />
          <label className="radio-label" htmlFor="zotang3">
            <Image
              className="radio-image"
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1716520597/Gin_Lian_Sum_OK_tyg3vo.jpg"
              alt="zotang3"
            />

            <span>{process.env.REACT_APP_ZOTANG3}</span>
          </label>

          <input
            className="radio-input"
            style={customInputStyle}
            type="radio"
            id="zotang4"
            name="zotang"
            value={process.env.REACT_APP_ZOTANG4}
            checked={zotang === process.env.REACT_APP_ZOTANG4}
            onChange={(e) => setZotang(e.target.value)}
          />
          <label className="radio-label" htmlFor="zotang4">
            <Image
              className="radio-image"
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1716520348/Thang_Muan_Lian_Khai_GA_klboaz.jpg"
              alt="zotang4"
            />

            <span>{process.env.REACT_APP_ZOTANG4}</span>
          </label>

          <input
            className="radio-input"
            style={customInputStyle}
            type="radio"
            id="zotang5"
            name="zotang"
            value={process.env.REACT_APP_ZOTANG5}
            checked={zotang === process.env.REACT_APP_ZOTANG5}
            onChange={(e) => setZotang(e.target.value)}
          />
          <label className="radio-label" htmlFor="zotang5">
            <Image
              className="radio-image"
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1716520319/Thang_Hau_Lam_Mang_GA_c96bfc.jpg"
              alt="zotang5"
            />

            <span>{process.env.REACT_APP_ZOTANG5}</span>
          </label>
        </div>

        <div className="vote">
          <label>Zolie khat teel in:</label>
          <br />
          <input
            className="radio-input"
            style={customInputStyle}
            type="radio"
            id="zolia1"
            name="zolia"
            value={process.env.REACT_APP_ZOLIA1}
            checked={zolia === process.env.REACT_APP_ZOLIA1}
            onChange={(e) => setZolia(e.target.value)}
          />
          <label className="radio-label" htmlFor="zolia1">
            <Image
              className="radio-image"
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1716520252/Angel_No_Sian_Cing_OK_yfmdrg.jpg"
              alt="zoLia1"
            />

            <span>{process.env.REACT_APP_ZOLIA1}</span>
          </label>

          <input
            className="radio-input"
            style={customInputStyle}
            type="radio"
            id="zolia2"
            name="zolia"
            value={process.env.REACT_APP_ZOLIA2}
            checked={zolia === process.env.REACT_APP_ZOLIA2}
            onChange={(e) => setZolia(e.target.value)}
          />
          <label className="radio-label" htmlFor="zolia2">
            <Image
              className="radio-image"
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1716520292/Cing_Huai_Kim_GA_v37awn.jpg"
              alt="zoLia2"
            />

            <span>{process.env.REACT_APP_ZOLIA2}</span>
          </label>

          <input
            className="radio-input"
            style={customInputStyle}
            type="radio"
            id="zolia3"
            name="zolia"
            value={process.env.REACT_APP_ZOLIA3}
            checked={zolia === process.env.REACT_APP_ZOLIA3}
            onChange={(e) => setZolia(e.target.value)}
          />
          <label className="radio-label" htmlFor="zolia3">
            <Image
              className="radio-image"
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1716520516/Cing_Deih_Nuam_NC_e4cho8.jpg"
              alt="zoLia3"
            />

            <span>{process.env.REACT_APP_ZOLIA3}</span>
          </label>

          <input
            className="radio-input"
            style={customInputStyle}
            type="radio"
            id="zolia4"
            name="zolia"
            value={process.env.REACT_APP_ZOLIA4}
            checked={zolia === process.env.REACT_APP_ZOLIA4}
            onChange={(e) => setZolia(e.target.value)}
          />
          <label className="radio-label" htmlFor="zolia4">
            <Image
              className="radio-image"
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1716520573/Hau_Ngaih_Cing_OK_jyrzwj.jpg"
              alt="zoLia4"
            />

            <span>{process.env.REACT_APP_ZOLIA4}</span>
          </label>

          <input
            className="radio-input"
            style={customInputStyle}
            type="radio"
            id="zolia5"
            name="zolia"
            value={process.env.REACT_APP_ZOLIA5}
            checked={zolia === process.env.REACT_APP_ZOLIA5}
            onChange={(e) => setZolia(e.target.value)}
          />
          <label className="radio-label" htmlFor="zolia5">
            <Image
              className="radio-image"
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1716520627/Dim_San_Niang_IN_yazpwr.jpg"
              alt="zoLia5"
            />

            <span>{process.env.REACT_APP_ZOLIA5}</span>
          </label>
        </div>

        <div className="vote">
          <label>Idol khat teel in:</label>

          <input
            className="radio-input"
            style={customInputStyle}
            type="radio"
            id="idol2"
            name="idol"
            value={process.env.REACT_APP_IDOL2}
            checked={idol === process.env.REACT_APP_IDOL2}
            onChange={(e) => setIdol(e.target.value)}
          />
          <label className="radio-label" htmlFor="idol2">
            <Image
              className="radio-image"
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1716520375/Niang_En_Lun_GA_ewwuzi.jpg"
              alt="idol2"
            />

            <span>{process.env.REACT_APP_IDOL2}</span>
          </label>

          <input
            className="radio-input"
            style={customInputStyle}
            type="radio"
            id="idol3"
            name="idol"
            value={process.env.REACT_APP_IDOL3}
            checked={idol === process.env.REACT_APP_IDOL3}
            onChange={(e) => setIdol(e.target.value)}
          />
          <label className="radio-label" htmlFor="idol3">
            <Image
              className="radio-image"
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1716520398/Grace_Cing_Dim_Lun_KY_op7zpy.jpg"
              alt="idol3"
            />

            <span>{process.env.REACT_APP_IDOL3}</span>
          </label>

          <input
            className="radio-input"
            style={customInputStyle}
            type="radio"
            id="idol4"
            name="idol"
            value={process.env.REACT_APP_IDOL4}
            checked={idol === process.env.REACT_APP_IDOL4}
            onChange={(e) => setIdol(e.target.value)}
          />
          <label className="radio-label" htmlFor="idol4">
            <Image
              className="radio-image"
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1716520438/Mang_Khai_OK_h8zzuf.jpg"
              alt="idol4"
            />

            <span>{process.env.REACT_APP_IDOL4}</span>
          </label>

          <input
            className="radio-input"
            style={customInputStyle}
            type="radio"
            id="idol5"
            name="idol"
            value={process.env.REACT_APP_IDOL5}
            checked={idol === process.env.REACT_APP_IDOL5}
            onChange={(e) => setIdol(e.target.value)}
          />
          <label className="radio-label" htmlFor="idol5">
            <Image
              className="radio-image"
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1716520464/Cing_Khan_NUam_KY_arg74p.jpg"
              alt="idol5"
            />

            <span>{process.env.REACT_APP_IDOL5}</span>
          </label>

          <input
            className="radio-input"
            style={customInputStyle}
            type="radio"
            id="idol6"
            name="idol"
            value={process.env.REACT_APP_IDOL6}
            checked={idol === process.env.REACT_APP_IDOL6}
            onChange={(e) => setIdol(e.target.value)}
          />
          <label className="radio-label" htmlFor="idol6">
            <Image
              className="radio-image"
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1716520487/Man_San_Nuam_Niang_MD_wbtcpd.jpg"
              alt="idol6"
            />

            <span>{process.env.REACT_APP_IDOL4}</span>
          </label>
          <br />
        </div>
        <div className="button-container">
          <button>Vote Them</button>
        </div>
        {error && <div className="error">{error}</div>}
      </form>
    </CloudinaryContext>
  );
};

export default WorkoutForm;
