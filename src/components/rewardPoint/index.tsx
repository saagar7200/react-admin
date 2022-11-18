import { Card, Grid, Typography } from "@material-ui/core";
import "./rewardPoint.css";

const RewardPoint = () => {
  return (
    <div className="rewardPoint-container">
      <Typography className="rewardPoint-title">Rewards</Typography>
      <Card className="rewardPoint-card">
        <Grid container>
          <Grid item xs={6}>
            <Typography className="rewardPoint-card-label">
              Existing Balance
            </Typography>
            <Typography className="rewardPoint-card-value">700</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className="rewardPoint-card-label">
              Total reward points
            </Typography>
            <Typography className="rewardPoint-card-value">250</Typography>
          </Grid>
        </Grid>
      </Card>
      <div className="rewardPoint-transaction">
        <Typography className="rewardPoint-transaction-title">
          Transaction
        </Typography>
        <div className="rewardPoint-transaction-description">
          <Typography className="rewardPoint-transaction-desc">
            Last ten transactions
          </Typography>
          <Typography className="rewardPoint-transaction-view-btn">
            View All
          </Typography>
        </div>
        <div className="rewardPoint-transaction-data">
          <Typography className="rewardPoint-transaction-date">
            Thu, 17 Nov
          </Typography>

          <div className="rewardPoint-transaction-data-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/TAXI.jpg/220px-TAXI.jpg"
              alt="img"
              width={"40px"}
            />
            <div className="rewardPoint-transaction-data-values">
              <div className="rewardPoint-transaction-data-values-points">
                <Typography className="rewardPoint-transaction-data-values-points-title">
                  Ola taxi booking
                </Typography>
                <Typography className="rewardPoint-transaction-data-values-points-points">
                  10 Points
                </Typography>
              </div>
              <Typography className="rewardPoint-transaction-data-values-status">
                Approved
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardPoint;
