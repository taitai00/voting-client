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
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1684816022/ZoTaang1_Kham_Khan_Sing_mgmkm1.jpg"
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
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1684816022/ZoTaang2_Khup_Za_Muan_hq3wsz.jpg"
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
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1684816022/ZoTaang3_Kham_Suan_Lian_kgsedl.jpg"
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
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1684816023/ZoTaang4_Dal_Sian_Mang_oodfnk.jpg"
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
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1684816023/ZoTaang5_Pau_Lun_Kim_vor4d8.jpg"
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
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1684816022/ZoLia1_Niang_Lam_Man_cdhrhp.jpg"
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
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1684816022/ZoLia2_Emily_Lian_s0qhoh.jpg"
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
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1684816022/ZoLia3_Nel_Sian_Dim_ghje0b.jpg"
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
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1684816022/Zolia4_Ciin_Sian_Dim_bhagvv.jpg"
              alt="zoLia4"
            />

            <span>{process.env.REACT_APP_ZOLIA4}</span>
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
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1684816022/Idol2_Thang_No_d33agp.jpg"
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
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1684816022/Idol3_Bosco_Lian_jyyk9w.jpg"
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
              publicId="https://res.cloudinary.com/dklygsuz7/image/upload/v1684816022/Idol4_Cing_Khan_Nuom_wpqbgn.jpg"
              alt="idol4"
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
