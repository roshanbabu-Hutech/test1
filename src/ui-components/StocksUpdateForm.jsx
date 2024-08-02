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
import { getStocks } from "../graphql/queries";
import { updateStocks } from "../graphql/mutations";
const client = generateClient();
export default function StocksUpdateForm(props) {
  const {
    id: idProp,
    stocks: stocksModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    company: "",
    symbol: "",
    market_cap: "",
    sector: "",
    country: "",
  };
  const [company, setCompany] = React.useState(initialValues.company);
  const [symbol, setSymbol] = React.useState(initialValues.symbol);
  const [market_cap, setMarket_cap] = React.useState(initialValues.market_cap);
  const [sector, setSector] = React.useState(initialValues.sector);
  const [country, setCountry] = React.useState(initialValues.country);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = stocksRecord
      ? { ...initialValues, ...stocksRecord }
      : initialValues;
    setCompany(cleanValues.company);
    setSymbol(cleanValues.symbol);
    setMarket_cap(cleanValues.market_cap);
    setSector(cleanValues.sector);
    setCountry(cleanValues.country);
    setErrors({});
  };
  const [stocksRecord, setStocksRecord] = React.useState(stocksModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getStocks.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getStocks
        : stocksModelProp;
      setStocksRecord(record);
    };
    queryData();
  }, [idProp, stocksModelProp]);
  React.useEffect(resetStateValues, [stocksRecord]);
  const validations = {
    company: [{ type: "Required" }],
    symbol: [],
    market_cap: [],
    sector: [],
    country: [],
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
          company,
          symbol: symbol ?? null,
          market_cap: market_cap ?? null,
          sector: sector ?? null,
          country: country ?? null,
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
            query: updateStocks.replaceAll("__typename", ""),
            variables: {
              input: {
                id: stocksRecord.id,
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
      {...getOverrideProps(overrides, "StocksUpdateForm")}
      {...rest}
    >
      <TextField
        label="Company"
        isRequired={true}
        isReadOnly={false}
        value={company}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              company: value,
              symbol,
              market_cap,
              sector,
              country,
            };
            const result = onChange(modelFields);
            value = result?.company ?? value;
          }
          if (errors.company?.hasError) {
            runValidationTasks("company", value);
          }
          setCompany(value);
        }}
        onBlur={() => runValidationTasks("company", company)}
        errorMessage={errors.company?.errorMessage}
        hasError={errors.company?.hasError}
        {...getOverrideProps(overrides, "company")}
      ></TextField>
      <TextField
        label="Symbol"
        isRequired={false}
        isReadOnly={false}
        value={symbol}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              company,
              symbol: value,
              market_cap,
              sector,
              country,
            };
            const result = onChange(modelFields);
            value = result?.symbol ?? value;
          }
          if (errors.symbol?.hasError) {
            runValidationTasks("symbol", value);
          }
          setSymbol(value);
        }}
        onBlur={() => runValidationTasks("symbol", symbol)}
        errorMessage={errors.symbol?.errorMessage}
        hasError={errors.symbol?.hasError}
        {...getOverrideProps(overrides, "symbol")}
      ></TextField>
      <TextField
        label="Market cap"
        isRequired={false}
        isReadOnly={false}
        value={market_cap}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              company,
              symbol,
              market_cap: value,
              sector,
              country,
            };
            const result = onChange(modelFields);
            value = result?.market_cap ?? value;
          }
          if (errors.market_cap?.hasError) {
            runValidationTasks("market_cap", value);
          }
          setMarket_cap(value);
        }}
        onBlur={() => runValidationTasks("market_cap", market_cap)}
        errorMessage={errors.market_cap?.errorMessage}
        hasError={errors.market_cap?.hasError}
        {...getOverrideProps(overrides, "market_cap")}
      ></TextField>
      <TextField
        label="Sector"
        isRequired={false}
        isReadOnly={false}
        value={sector}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              company,
              symbol,
              market_cap,
              sector: value,
              country,
            };
            const result = onChange(modelFields);
            value = result?.sector ?? value;
          }
          if (errors.sector?.hasError) {
            runValidationTasks("sector", value);
          }
          setSector(value);
        }}
        onBlur={() => runValidationTasks("sector", sector)}
        errorMessage={errors.sector?.errorMessage}
        hasError={errors.sector?.hasError}
        {...getOverrideProps(overrides, "sector")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              company,
              symbol,
              market_cap,
              sector,
              country: value,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
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
          isDisabled={!(idProp || stocksModelProp)}
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
              !(idProp || stocksModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
