import { Card, Typography, CardContent, Box } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import { makeStyles } from '@material-ui/styles';
import CompanyItemMenu from './company-item-menu';

const useStyles = makeStyles(theme => ({
  cardHeaderText: {
    fontSize: 12,
    marginLeft: 0,
    marginBottom: 0,
    display: 'flex'
  },
  cardBox: {
    padding: '13px 29px',
    height: 170
  },
  cardBoxHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardIcon: {
    fontSize: 20,
    marginTop: -2,
    color: '#b2b0b0',
    height: 15,
    width: 'auto'
  },
  cardBoxHeadeText: {
    marginLeft: 8,
    color: '#b2b0b0',
    textTransform: 'uppercase',
    fontSize: 10,
    fontWeight: 400
  },
  cardContent: {
    paddingLeft: 0,
    paddingRight: 0
  }
}));

export default function CompanyItem(props) {
  const classes = useStyles();
  return (
    <Card className={classes.cardBox}>
      <div className={classes.cardBoxHeader}>
        <Typography
          className={classes.cardHeaderText}
          color="textSecondary"
          gutterBottom
        >
          <BusinessIcon className={classes.cardIcon} />
          <span className={classes.cardBoxHeadeText}>Company</span>
        </Typography>
        <CompanyItemMenu
          onEdit={() => props.onEdit(props.company.c_id)}
          onDelete={() =>
            props.onDelete(props.company.c_id, props.company.name)
          }
        ></CompanyItemMenu>
      </div>
      <CardContent className={classes.cardContent}>
        <Typography component="h6" variant="h6" color="primary">
          <Box className="clip-txt">{props.company.name}</Box>
        </Typography>
        <Typography variant="caption" color="textSecondary">
          <Box className="clip-txt">{props.company.description}</Box>
        </Typography>
      </CardContent>
    </Card>
  );
}
