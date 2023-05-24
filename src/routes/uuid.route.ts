import express, { Request, Response } from "express";
import {
  v4 as uuIDv4,
  version as uuidVersion,
  validate as uuidValidate,
} from "uuid";
import Session_Storage from "../storage/session.storage";
export const router = express.Router();

router.post(`/`, (req: Request, res: Response) => {
  const uuID_Create = () => {
    const uuID = uuIDv4();

    if (Object.keys(Session_Storage).length === 0) {
      Session_Storage.sessions_id = [
        {
          ID: Object.keys(Session_Storage).length,
          uuIDv4: uuID,
          time: new Date().getTime(),
        },
      ];

      res.send({ uuIDv4: uuID });
      res.status(200);
    } else if (Session_Storage.sessions_id.length > 0) {
      Session_Storage.sessions_id.push({
        ID: Session_Storage.sessions_id.length,
        uuIDv4: uuID,
        time: new Date().getTime(),
      });

      res.send({ uuIDv4: uuID });
      res.status(200);
    } else {
      res.sendStatus(404);
      res.end();
    }
  };

  const uuID_Verify = (uuID: string) => {
    if (uuidValidate(uuID) && uuidVersion(uuID) === 4) {
      Session_Storage.sessions_id.forEach(
        (id: { uuIDv4: string | undefined }) => {
          if (id.uuIDv4 === uuID) {
            res.sendStatus(200);
            res.end();
          } else {
            res.sendStatus(404);
            res.end();
          }
        },
      );
    } else {
      res.sendStatus(404);
      res.end();
    }
  };

  if (Object.keys(req.body).length === 0) {
    uuID_Create();
  } else if (Object.keys(req.body).length > 0) {
    const value = req.body.uuIDv4;

    uuID_Verify(value);
  } else {
    res.sendStatus(404);
    res.end();
  }
});
