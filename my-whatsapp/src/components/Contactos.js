import React from 'react';
import {
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Typography,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core'
import data from '../data/db.json';
import { makeStyles } from '@material-ui/styles';
import { CommentIcon } from '@material-ui/icons/Comment';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

export default function(){
    const classes = useStyles();
    console.log(data);
    var allContacts = data.allFriends;
    return (<List className={classes.root}>
        {allContacts.map((contact, index) => (
            
            <ListItem key={index} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={contact.name} src={`/img/person_small${contact.id}.jpg`} />
                </ListItemAvatar>
                <ListItemText
                    primary={contact.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="comments">
                        <CommentIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>)
}
