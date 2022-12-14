// @ts-nocheck
import { useState, useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  Show,
  SimpleShowLayout,
  useShowController,
  DataProviderContext,
  Loading,
  useRefresh,
} from "react-admin";
import "../../../styles/edit.css";
import "../users.css";

export const DetailUser = (props: any) => {
  const { isLoading, record } = useShowController(props);
  const dataProvider = useContext(DataProviderContext);

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [withdrawStatus, setWithdrawStatus] = useState(false);
  const [seedTrasactionLoading, setSeedTransactionLoading] = useState(false);
  const [seedLedgerLoading, setLedgerLoading] = useState(false);

  const refresh = useRefresh();

  const handleWithdraw = () => {
    if (record.id) {
      dataProvider
        .getOne(`ledgers?userId=${record.id}`, {
          pagination: { page: 1, perPage: 5 },
        })
        .then(({ data }) => {
          setUser(data);
          setLoading(false);
          setWithdrawStatus(true);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  };
  const handleSeedTransaction = () => {
    if (record.id) {
      setSeedTransactionLoading(true);
      dataProvider
        .create(`seeding/populate-transaction?userId=${record.id}`, {
          data: { userId: `${record.id}` },
        })
        .then(({ data }) => {
          // setUser(data);
          // setLoading(false);
          setSeedTransactionLoading(false);
          refresh();
        })
        .catch((error) => {
          setSeedTransactionLoading(false);
        });
    }
  };
  const handleSeedLadger = () => {
    if (record.id) {
      setLedgerLoading(true);
      dataProvider
        .create(`seeding/populate-ledger?userId=${record.id}`, {
          data: { userId: `${record.id}` },
        })
        .then((res) => {
          setLedgerLoading(false);
          refresh();
        })
        .catch((error) => {
          setLedgerLoading(false);
        });
    }
  };

  if (isLoading) return <Loading color="#312a91" />;

  return (
    <div className="create_category_container">
      <div className="user_detail_header">
        <Typography className="form_heading" variant="h5">
          User Detail
        </Typography>
        <button onClick={handleWithdraw} className="user_detail_withdraw_btn">
          Withdraw
        </button>
      </div>
      <Show actions=" " {...props} className="user_detail_show_container">
        <SimpleShowLayout>
          <div className="user_detail_basic_info">
            <div className="user_details_basic_info_heading">
              <Typography className="user_detail_card_title" variant="h6">
                Basic Information
              </Typography>
              <div className="user_detail_info_head_button_wrapper">
                <button
                  disabled={seedTrasactionLoading}
                  onClick={handleSeedTransaction}
                  className="seed_button"
                >
                  Seed Transaction
                </button>{" "}
                <button
                  disabled={seedLedgerLoading}
                  onClick={handleSeedLadger}
                  className="seed_button"
                >
                  Seed Ladger
                </button>{" "}
              </div>
            </div>

            <Grid container spacing={2}>
              <Grid item sm={6} md={4}>
                <div className="user_detail_data_container">
                  <div className="user_detail_data_title">Image</div>
                  <div className="user_detail_data">
                    {record.image ? (
                      <img
                        className="user_profile"
                        alt={record.name}
                        src={record.image}
                      />
                    ) : (
                      "-"
                    )}
                  </div>
                </div>
              </Grid>
              <Grid item sm={6} md={4}>
                <div className="user_detail_data_container">
                  <div className="user_detail_data_title">Name</div>
                  <div className="user_detail_data">
                    {record.name ? record.name : "-"}
                  </div>
                </div>
              </Grid>
              <Grid item sm={6} md={4}>
                <div className="user_detail_data_container">
                  <div className="user_detail_data_title">Balance</div>
                  <div className="user_detail_data">
                    {record.Balance ? record.Balance : "0"}
                  </div>
                </div>
              </Grid>
              <Grid item sm={6} md={4}>
                <div className="user_detail_data_container">
                  <div className="user_detail_data_title">
                    Total Commission Amount
                  </div>
                  <div className="user_detail_data">
                    {record.commissionAmountSum
                      ? record.commissionAmountSum
                      : "0"}
                  </div>
                </div>
              </Grid>
              <Grid item sm={6} md={4}>
                <div className="user_detail_data_container">
                  <div className="user_detail_data_title">
                    Approved Commission Amount
                  </div>
                  <div className="user_detail_data">
                    {record.commissionSumApproved
                      ? record.commissionSumApproved
                      : "0"}
                  </div>
                </div>
              </Grid>
              <Grid item sm={6} md={4}>
                <div className="user_detail_data_container">
                  <div className="user_detail_data_title">
                    Pending Commission Amount
                  </div>
                  <div className="user_detail_data">
                    {record.commissionSumPend ? record.commissionSumPend : "0"}
                  </div>
                </div>
              </Grid>
              <Grid item sm={6} md={4}>
                <div className="user_detail_data_container">
                  <div className="user_detail_data_title">
                    Total Sales Amount
                  </div>
                  <div className="user_detail_data">
                    {record.salesAmountSum ? record.salesAmountSum : "0"}
                  </div>
                </div>
              </Grid>
              <Grid item sm={6} md={4}>
                <div className="user_detail_data_container">
                  <div className="user_detail_data_title">
                    Approved Sales Amount
                  </div>
                  <div className="user_detail_data">
                    {record.salesAmountSumApproved
                      ? record.salesAmountSumApproved
                      : "0"}
                  </div>
                </div>
              </Grid>
              <Grid item sm={6} md={4}>
                <div className="user_detail_data_container">
                  <div className="user_detail_data_title">
                    Pending Sales Amount
                  </div>
                  <div className="user_detail_data">
                    {record.salesAmountSumPend
                      ? record.salesAmountSumPend
                      : "0"}
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>

          {!loading && withdrawStatus ? (
            <div className="user_detail_ledger_info">
              <Typography
                className="user_detail_card_title user_detail_ledger_title"
                variant="h6"
              >
                Ledger Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item sm={6} md={4}>
                  <div className="user_detail_data_container">
                    <div className="user_detail_data_title">
                      Transaction Type
                    </div>
                    <div className="user_detail_data">
                      {user?.[0].transactionType
                        ? user?.[0].transactionType
                        : "-"}
                    </div>
                  </div>
                </Grid>
                <Grid item sm={6} md={4}>
                  <div className="user_detail_data_container">
                    <div className="user_detail_data_title">Amount</div>
                    <div className="user_detail_data">
                      {user?.[0].amount ? user?.[0].amount : "0"}
                    </div>
                  </div>
                </Grid>
                <Grid item sm={6} md={4}>
                  <div className="user_detail_data_container">
                    <div className="user_detail_data_title">Network</div>
                    <div className="user_detail_data">
                      {user?.[0].network ? user?.[0].network : "-"}
                    </div>
                  </div>
                </Grid>
                <Grid item sm={6} md={4}>
                  <div className="user_detail_data_container">
                    <div className="user_detail_data_title">Reward Point</div>
                    <div className="user_detail_data">
                      {user?.[0].rewardPoint ? user?.[0].rewardPoint : "0"}
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          ) : (
            ""
          )}
        </SimpleShowLayout>
      </Show>
    </div>
  );
};
