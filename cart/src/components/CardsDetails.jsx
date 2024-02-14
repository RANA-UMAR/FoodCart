import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DELETE, ADD, MINUS } from "../redux/actions/Action";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const history = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.reducer.carts);
  const compareFilter = getData.filter((e) => e.id == id);

  useEffect(() => {
    setData(compareFilter);
  }, [getData, id]);

  const remove = (id) => {
    dispatch(DELETE(id));
    history("/");
  };

  const onAdd = (e) => {
    dispatch(ADD(e));
  };

  const remove_one = (item) => {
    dispatch(MINUS(item));
  };

  return (
    <div className="container mx-auto px-4 lg:px-0">
      <h1 className="text-center font-bold text-3xl mt-8 mb-4">
        Products Detail Page
      </h1>
      {data.map((e, index) => (
        <div className="grid grid-cols-1 md:grid-cols-2 " key={index}>
          <div className="flex justify-center items-center">
            <img src={e.imgdata} className="w-96 h-72  md:w-72 h-56" alt="" />
          </div>
          <div className="mt-4 mx-auto flex flex-col justify-center items-center md:mt-10">
            <table className="w-full ">
              <tbody>
                <tr>
                  <td>
                    <p>
                      <b>Restaurant</b>: {e.rname}
                    </p>
                    <p>
                      <b>Price</b>: ${e.price}
                    </p>
                    <p>
                      <b>Dishes</b>: {e.address}
                    </p>
                    <p>
                      <b>Total</b>: ${e.price * e.qnty}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>
                    <p>
                      <b>Rating</b>:{" "}
                      <span className="bg-green-700 text-white rounded-md px-1">
                        {e.rating}
                      </span>
                    </p>
                    <p>
                      <b>Order Review</b>: {e.somedata}
                    </p>
                    <p>
                      <b>Remove</b>:{" "}
                      <DeleteIcon
                        className="text-red-500 cursor-pointer"
                        onClick={() => remove(e.id)}
                      />
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 flex justify-center items-center bg-slate-300 rounded w-28 md:mr-28 mt-7">
              <span className="cursor-pointer">
                <RemoveIcon
                  onClick={
                    e.qnty <= 1 ? () => remove(e.id) : () => remove_one(e)
                  }
                />
              </span>
              <span className="font-medium text-2xl mx-2">{e.qnty}</span>
              <span className="cursor-pointer">
                <AddIcon onClick={() => onAdd(e)} />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsDetails;
