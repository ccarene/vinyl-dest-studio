/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createVinylRecord } from "../graphql/mutations";
const client = generateClient();
export default function VinylRecordCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    stock: "",
    year: "",
    artist: "",
    price: "",
    pictureS3URL: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [stock, setStock] = React.useState(initialValues.stock);
  const [year, setYear] = React.useState(initialValues.year);
  const [artist, setArtist] = React.useState(initialValues.artist);
  const [price, setPrice] = React.useState(initialValues.price);
  const [pictureS3URL, setPictureS3URL] = React.useState(
    initialValues.pictureS3URL
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setStock(initialValues.stock);
    setYear(initialValues.year);
    setArtist(initialValues.artist);
    setPrice(initialValues.price);
    setPictureS3URL(initialValues.pictureS3URL);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    stock: [{ type: "Required" }],
    year: [{ type: "Required" }],
    artist: [{ type: "Required" }],
    price: [{ type: "Required" }],
    pictureS3URL: [{ type: "URL" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          stock,
          year,
          artist,
          price,
          pictureS3URL,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createVinylRecord.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "VinylRecordCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              stock,
              year,
              artist,
              price,
              pictureS3URL,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Stock"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={stock}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              stock: value,
              year,
              artist,
              price,
              pictureS3URL,
            };
            const result = onChange(modelFields);
            value = result?.stock ?? value;
          }
          if (errors.stock?.hasError) {
            runValidationTasks("stock", value);
          }
          setStock(value);
        }}
        onBlur={() => runValidationTasks("stock", stock)}
        errorMessage={errors.stock?.errorMessage}
        hasError={errors.stock?.hasError}
        {...getOverrideProps(overrides, "stock")}
      ></TextField>
      <TextField
        label="Year"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={year}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              stock,
              year: value,
              artist,
              price,
              pictureS3URL,
            };
            const result = onChange(modelFields);
            value = result?.year ?? value;
          }
          if (errors.year?.hasError) {
            runValidationTasks("year", value);
          }
          setYear(value);
        }}
        onBlur={() => runValidationTasks("year", year)}
        errorMessage={errors.year?.errorMessage}
        hasError={errors.year?.hasError}
        {...getOverrideProps(overrides, "year")}
      ></TextField>
      <TextField
        label="Artist"
        isRequired={true}
        isReadOnly={false}
        value={artist}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              stock,
              year,
              artist: value,
              price,
              pictureS3URL,
            };
            const result = onChange(modelFields);
            value = result?.artist ?? value;
          }
          if (errors.artist?.hasError) {
            runValidationTasks("artist", value);
          }
          setArtist(value);
        }}
        onBlur={() => runValidationTasks("artist", artist)}
        errorMessage={errors.artist?.errorMessage}
        hasError={errors.artist?.hasError}
        {...getOverrideProps(overrides, "artist")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              stock,
              year,
              artist,
              price: value,
              pictureS3URL,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Picture s3 url"
        isRequired={false}
        isReadOnly={false}
        value={pictureS3URL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              stock,
              year,
              artist,
              price,
              pictureS3URL: value,
            };
            const result = onChange(modelFields);
            value = result?.pictureS3URL ?? value;
          }
          if (errors.pictureS3URL?.hasError) {
            runValidationTasks("pictureS3URL", value);
          }
          setPictureS3URL(value);
        }}
        onBlur={() => runValidationTasks("pictureS3URL", pictureS3URL)}
        errorMessage={errors.pictureS3URL?.errorMessage}
        hasError={errors.pictureS3URL?.hasError}
        {...getOverrideProps(overrides, "pictureS3URL")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
