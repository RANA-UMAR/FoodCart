import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Cardsdata from "./Cardsdata";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/Action";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  const dispatch = useDispatch();

  const onAdd = (e) => {
    dispatch(ADD(e));
  };

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-3 lg:grid-cols-4 gap-4 pt-3">
        {data.map((elem, index) => (
          <div key={index} className="w-full flex justify-center">
            <Card sx={{ maxWidth: 305 }}>
              <CardMedia
                sx={{ height: 230 }}
                image={elem.imgdata}
                title={elem.rname}
              />
              <CardContent>
                <h1 className="text-xl pb-2 font-medium">{elem.rname}</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Enim, soluta harum sit hic non impedit
                </p>
                <h1 className="pt-2 font-medium">Price : ${elem.price}</h1>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{ width: "100%" }}
                  onClick={() => onAdd(elem)}
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
