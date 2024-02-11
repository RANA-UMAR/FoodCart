import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { DELETE } from "../redux/actions/Action";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {
  const[price,setPrice]=useState(0);
  // console.log(price);
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.reducer.carts);
  console.log(getData);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const remove = (id)=>{
  dispatch(DELETE(id));
  }

  const total =()=>{
    let price = 0;
    getData.map((elem,id)=>{
      price= elem.price*elem.qnty + price
    })
    setPrice(price);
  }

  useEffect(()=>{
    total()
  },[total])

  return (
    <div>
      <div className="flex justify-between items-center bg-slate-700 text-white p-3 px-10">
        <div className="cart-logo flex gap-5 ">
          <h1>Add To Cart</h1>
          <div className="links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart-icon">
          <Badge
            badgeContent={getData.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <ShoppingCartIcon />
          </Badge>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getData.length ? (
            <div>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="border-b-2 border-gray-500 pb-2">Photo</th>
                    <th className="border-b-2 border-gray-500 pb-2 ">
                      Restaurant Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((e, id) => (
                    <tr key={id}>
                      <td className="border-t border-gray-500">
                        <NavLink to={`/cart/${e.id}`}>
                          <img
                            src={e.imgdata}
                            alt=""
                            className="w-36 h-24 cursor-pointer"
                          onClick={handleClose}
                          />
                        </NavLink>
                      </td>
                      <td className="border-t border-gray-500 pl-4">
                        <div>
                          <p>
                            <b>{e.rname}</b>
                          </p>
                          <p>
                            <b>Price: </b>${e.price}
                          </p>
                          <p>
                            <b>Quantity: </b>
                            {e.qnty}
                          </p>
                          <p className="">
                            <DeleteIcon className="text-red-500" onClick={()=>remove(e.id)} />
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <p>
                  <b>Total : </b>${price}
                </p>
              </table>
            </div>
          ) : (
            <div className="flex justify-center items-center relative pt-7 px-9">
              <CloseIcon
                className="absolute left-[135px] bottom-9"
                onClick={handleClose}
              />
              <h1 className="">Nothing in the Cart</h1>
              <img src="images/cart.gif" alt="" className="w-8" />
            </div>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Header;
