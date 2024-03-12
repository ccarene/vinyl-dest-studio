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
import { getCustomer } from "../graphql/queries";
import { updateCustomer } from "../graphql/mutations";
const client = generateClient();
export default function CustomerUpdateForm(props) {
  const {
    id: idProp,
    customer: customerModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    FirstName: "",
    LastName: "",
    StreetAddress: "",
    City: "",
    Zip: "",
    State: "",
    Email: "",
    Number: "",
  };
  const [FirstName, setFirstName] = React.useState(initialValues.FirstName);
  const [LastName, setLastName] = React.useState(initialValues.LastName);
  const [StreetAddress, setStreetAddress] = React.useState(
    initialValues.StreetAddress
  );
  const [City, setCity] = React.useState(initialValues.City);
  const [Zip, setZip] = React.useState(initialValues.Zip);
  const [State, setState] = React.useState(initialValues.State);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Number, setNumber] = React.useState(initialValues.Number);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = customerRecord
      ? { ...initialValues, ...customerRecord }
      : initialValues;
    setFirstName(cleanValues.FirstName);
    setLastName(cleanValues.LastName);
    setStreetAddress(cleanValues.StreetAddress);
    setCity(cleanValues.City);
    setZip(cleanValues.Zip);
    setState(cleanValues.State);
    setEmail(cleanValues.Email);
    setNumber(cleanValues.Number);
    setErrors({});
  };
  const [customerRecord, setCustomerRecord] = React.useState(customerModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCustomer.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCustomer
        : customerModelProp;
      setCustomerRecord(record);
    };
    queryData();
  }, [idProp, customerModelProp]);
  React.useEffect(resetStateValues, [customerRecord]);
  const validations = {
    FirstName: [],
    LastName: [],
    StreetAddress: [],
    City: [],
    Zip: [],
    State: [],
    Email: [],
    Number: [],
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
          FirstName: FirstName ?? null,
          LastName: LastName ?? null,
          StreetAddress: StreetAddress ?? null,
          City: City ?? null,
          Zip: Zip ?? null,
          State: State ?? null,
          Email: Email ?? null,
          Number: Number ?? null,
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
            query: updateCustomer.replaceAll("__typename", ""),
            variables: {
              input: {
                id: customerRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CustomerUpdateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={FirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName: value,
              LastName,
              StreetAddress,
              City,
              Zip,
              State,
              Email,
              Number,
            };
            const result = onChange(modelFields);
            value = result?.FirstName ?? value;
          }
          if (errors.FirstName?.hasError) {
            runValidationTasks("FirstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("FirstName", FirstName)}
        errorMessage={errors.FirstName?.errorMessage}
        hasError={errors.FirstName?.hasError}
        {...getOverrideProps(overrides, "FirstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={LastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName: value,
              StreetAddress,
              City,
              Zip,
              State,
              Email,
              Number,
            };
            const result = onChange(modelFields);
            value = result?.LastName ?? value;
          }
          if (errors.LastName?.hasError) {
            runValidationTasks("LastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("LastName", LastName)}
        errorMessage={errors.LastName?.errorMessage}
        hasError={errors.LastName?.hasError}
        {...getOverrideProps(overrides, "LastName")}
      ></TextField>
      <TextField
        label="Street address"
        isRequired={false}
        isReadOnly={false}
        value={StreetAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              StreetAddress: value,
              City,
              Zip,
              State,
              Email,
              Number,
            };
            const result = onChange(modelFields);
            value = result?.StreetAddress ?? value;
          }
          if (errors.StreetAddress?.hasError) {
            runValidationTasks("StreetAddress", value);
          }
          setStreetAddress(value);
        }}
        onBlur={() => runValidationTasks("StreetAddress", StreetAddress)}
        errorMessage={errors.StreetAddress?.errorMessage}
        hasError={errors.StreetAddress?.hasError}
        {...getOverrideProps(overrides, "StreetAddress")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={City}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              StreetAddress,
              City: value,
              Zip,
              State,
              Email,
              Number,
            };
            const result = onChange(modelFields);
            value = result?.City ?? value;
          }
          if (errors.City?.hasError) {
            runValidationTasks("City", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("City", City)}
        errorMessage={errors.City?.errorMessage}
        hasError={errors.City?.hasError}
        {...getOverrideProps(overrides, "City")}
      ></TextField>
      <TextField
        label="Zip"
        isRequired={false}
        isReadOnly={false}
        value={Zip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              StreetAddress,
              City,
              Zip: value,
              State,
              Email,
              Number,
            };
            const result = onChange(modelFields);
            value = result?.Zip ?? value;
          }
          if (errors.Zip?.hasError) {
            runValidationTasks("Zip", value);
          }
          setZip(value);
        }}
        onBlur={() => runValidationTasks("Zip", Zip)}
        errorMessage={errors.Zip?.errorMessage}
        hasError={errors.Zip?.hasError}
        {...getOverrideProps(overrides, "Zip")}
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={State}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              StreetAddress,
              City,
              Zip,
              State: value,
              Email,
              Number,
            };
            const result = onChange(modelFields);
            value = result?.State ?? value;
          }
          if (errors.State?.hasError) {
            runValidationTasks("State", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("State", State)}
        errorMessage={errors.State?.errorMessage}
        hasError={errors.State?.hasError}
        {...getOverrideProps(overrides, "State")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              StreetAddress,
              City,
              Zip,
              State,
              Email: value,
              Number,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        label="Number"
        isRequired={false}
        isReadOnly={false}
        value={Number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              StreetAddress,
              City,
              Zip,
              State,
              Email,
              Number: value,
            };
            const result = onChange(modelFields);
            value = result?.Number ?? value;
          }
          if (errors.Number?.hasError) {
            runValidationTasks("Number", value);
          }
          setNumber(value);
        }}
        onBlur={() => runValidationTasks("Number", Number)}
        errorMessage={errors.Number?.errorMessage}
        hasError={errors.Number?.hasError}
        {...getOverrideProps(overrides, "Number")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || customerModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || customerModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
