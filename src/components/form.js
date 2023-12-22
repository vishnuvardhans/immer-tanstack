import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";
import { useNavigate, createSearchParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { columns } from "./datas.js/column-data";



function Form() {
  const { register, handleSubmit } = useForm();
  const [FormDatas, setFormDatas] = useState("");
  const handleRegistration = (data) => {
    // console.log(data);
    setFormDatas(data.value);
  };
  var isLongEnough = FormDatas?.length > 0

  const {isLoading, isError, data} = useQuery({
    queryKey:['repoData'],
    queryFn :  () => { 
      axios
        .get(`https://jsonplaceholder.typicode.com/${FormDatas}`)
        .then((res) => res.data)
       
    }
  })

  const navigate = useNavigate();
  const rowClick = (row) => {
    console.log(row);
    navigate(
      `/page1/?${createSearchParams({
        body: row.original.body,
        name: row.original.name,
        email: row.original.email,
      })}`
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
          <label>enter the value of extension of base url</label>
          <input name="value" {...register("value")} />
        </div>
        <button>Submit</button>
      </form>
      {data ? (
        <MaterialReactTable
          columns={columns}
          data={data}
          // enableColumnActions= {false}
          // enableColumnFilters= {false}
          // enablePagination= {false}
          enableSorting={false}
          muiTableBodyRowProps={({ row }) => ({
            onClick: (e) => rowClick(row),
            sx: {
              backgroundColor: "",
            },
          })}
          initialState={{
            isLoading,
          }}
        />
      ) : (
        FormDatas && (
          <Skeleton variant="rectangular" width={2210} height={600} />
        )
      )}
    </div>
  );
}

export default Form;
