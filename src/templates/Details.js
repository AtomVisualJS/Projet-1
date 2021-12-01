import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  console.log(id);

  const getProduct = () => {
    axios
      .get(`http://localhost:5000/api/posts/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Details</h1>
      <button onClick={getProduct}>Get Product</button>
    </div>
  );
};

export default Details;
