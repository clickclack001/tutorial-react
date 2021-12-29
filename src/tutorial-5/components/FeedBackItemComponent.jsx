import React from 'react';
import ListItem from "@mui/material/ListItem";
import CloseIcon from "@mui/icons-material/Close";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

const FeedBackItemComponent = ({name, comment, createdAt, onDel, index}) => {
    return (
        <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper'}}>
            <ListItem alignItems="flex-start">
                <div className={'close'}>
                    <CloseIcon
                        sx={{ fontSize: 20, color: '#cccccc' }}
                        onClick={() => onDel(index)}
                    />
                </div>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={comment}
                />
                <Typography
                    component="span"
                    sx={{ position: 'absolute', bottom: '0', right: '5px', fontSize: '0.5em', color: '#cccccc' }}
                >
                    {createdAt}
                </Typography>
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
};

export default FeedBackItemComponent;