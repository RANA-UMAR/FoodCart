import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DELETE } from "../redux/actions/Action";
import { ADD } from "../redux/actions/Action"; 
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { MINUS } from "../redux/actions/Action";
const CardsDetails = () => {
  const [data, setData] = useState([]);
  const history = useNavigate();
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.reducer.carts);
  // console.log(getData);
  const compareFilter = getData.filter((e) => {
    return e.id == id;
  });
  useEffect(() => {
    setData(compareFilter);
  }, [getData, id]);

  const remove = (id) => {
    dispatch(DELETE(id));
    history("/")
  };

  const onAdd = (e)=>{
    dispatch(ADD(e))
  }

  const remove_one = (item)=>{
    dispatch(MINUS(item))
  }

  return (
    <div className="">
      <h1 className="text-center font-bold text-3xl">Products Detail Page</h1>
      {data.map((e, id) => {
        return (
          <div className="flex justify-center items-center pt-5" key={id}>
            <img src={e.imgdata} className="w-72 h-56" alt="" />

            <div className="pt-20 pl-10">
              <table>
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
                        <b>Total</b>: ${e.price*e.qnty}
                      </p>
                      
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-[105px] pl-10">
              <table>
                <tbody>
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
                          className="text-red-500"
                          onClick={() => remove(e.id)}
                        />
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-12 flex justify-between items-center bg-slate-300 rounded w-28">
                        <span className=""><RemoveIcon onClick={e.qnty <= 1 ? ()=>remove(e.id) : ()=>remove_one(e)}/></span>
                        <span className="font-medium text-2xl mr-2">{e.qnty}</span>
                        <span className=""><AddIcon onClick={()=>onAdd(e)}/></span>

                      </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardsDetails;
