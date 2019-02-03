const styles = theme => ({
  card: {
    // maxHeight: 800,
    paddingBottom: theme.spacing.unit * 1.5
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  title: {
    color: theme.palette.text.primary
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  avatar: {
    marginRight: theme.spacing.unit * 2,
    width: 60,
    height: 60
    // borderRadius: 50
  },
  gravatar: {
    borderRadius: 50,
    width: 80,
    height: 80
  },
  owner: {
    marginBottom: theme.spacing.unit * 6
  }
  // ownerInfo: {
  //   width: '100%'
  // }
});

export default styles;
