import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import notImage from "../../assets/not-image.png";
import { DeviceType } from "../../types/device/deviceType";
import { UserType } from "../../types/user/UserType";

type PropsType = {
  device: DeviceType;
  user: UserType;
  onDeleteDevice: (id: number) => void;
  onBorrowDevice: (id: number) => void;
  onGetDeviceBack: (id: number) => void;
};

const DeviceItem: React.FC<PropsType> = ({
  device,
  user,
  onDeleteDevice,
  onBorrowDevice,
  onGetDeviceBack,
}) => {
  return (
    <Card sx={{ width: 320, margin: "0 auto" }}>
      <CardMedia
        component="img"
        alt="device"
        image={device.image ? device.image : notImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {device.model}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {device.vendor}/ {device.osVersion}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <b>
            Status:{" "}
            {device.borrowed
              ? `Pujčeno ${device.borrowed.user.name}`
              : "Dostupné"}
          </b>
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          disabled={device.borrowed ? true : false}
          variant="contained"
          onClick={() => onBorrowDevice(device.id)}
          style={{
            margin: "0 auto",
            width: "100%",
            backgroundColor: device.borrowed ? "#e0e0eb" : "#da5a38",
          }}
          size="large"
        >
          půjčit
        </Button>
      </CardActions>

      <CardActions>
        {device.borrowed ? (
          <Button
            onClick={() => onGetDeviceBack(device.id)}
            style={{
              margin: "0 auto",
              color: "#fff",
              width: "100%",
              backgroundColor: "#00cc44",
            }}
          >
            vrátit
          </Button>
        ) : null}
      </CardActions>

      <CardActions>
        {user.type === "admin" ? (
          <Button
            type="submit"
            onClick={(e) => onDeleteDevice(device.id)}
            style={{
              margin: "0 auto",
              color: "#fff",
              backgroundColor: "red",
              width: "100%",
            }}
            size="large"
          >
            odstranit
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
};

export default DeviceItem;
