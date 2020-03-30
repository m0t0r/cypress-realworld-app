import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TransactionResponseItem } from "../models";
import { Typography } from "@material-ui/core";
import { isRequestTransaction, formatAmount } from "../utils/transactionUtils";

const useStyles = makeStyles((theme) => ({
  amountPositive: {
    fontSize: 24,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
    },
    color: "#4CAF50",
  },
  amountNegative: {
    fontSize: 24,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
    },
    color: "red",
  },
}));

const TransactionAmount: React.FC<{
  transaction: TransactionResponseItem;
}> = ({ transaction }) => {
  const classes = useStyles();

  return (
    <Typography
      className={
        isRequestTransaction(transaction)
          ? classes.amountPositive
          : classes.amountNegative
      }
      display="inline"
      component="span"
      color="primary"
    >
      {isRequestTransaction(transaction) ? "+" : "-"}
      {transaction.amount && formatAmount(transaction.amount)}
    </Typography>
  );
};

export default TransactionAmount;
