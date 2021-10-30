/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import tipos from "../../../../assets/staticData/types";
import { CustomTable, TableRow, TableHead, TableData } from "./styles";
export default function Table({ options, setOptions }) {
  const [checkAll, setCheckAll] = useState(false);
  const [data, setData] = useState(tipos);

  function changeStatus(indexAlter, status) {
    setData((prevState) =>
      prevState.map((Element, index) => {
        if (index === indexAlter) {
          return {
            ...Element,
            status,
          };
        } else return Element;
      })
    );
  }

  useEffect(() => {
    if (checkAll === false) {
      setData((prevState) =>
        prevState.map((Element) => {
          return {
            ...Element,
            status: false,
          };
        })
      );
    }
    if (checkAll === true) {
      setData((prevState) =>
        prevState.map((Element) => {
          return {
            ...Element,
            status: true,
          };
        })
      );
    }
  }, [checkAll]);

  useEffect(() => {
    if (data) {
      setOptions(data);
    }
  }, [data]);
  return (
    <CustomTable>
      <thead>
        <TableRow>
          <TableHead>
            <input
              checked={checkAll}
              type="checkbox"
              onChange={(e) => setCheckAll(e.target.checked)}
            />
          </TableHead>
          <TableHead>Tipos</TableHead>
        </TableRow>
      </thead>
      <tbody>
        {data.map((Element, index) => {
          return (
            <TableRow key={index}>
              <TableData>
                <input
                  checked={Element.status}
                  type="checkbox"
                  onChange={(e) => changeStatus(index, e.target.checked)}
                />
              </TableData>
              <TableData>{Element.tipo}</TableData>
            </TableRow>
          );
        })}
      </tbody>
    </CustomTable>
  );
}
