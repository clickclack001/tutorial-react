import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";

const FeedBackFormComponent = ({ onAdd }) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const handleChange = (e) => {
        switch (e.target.name)
        {
            case "fullName":
                setFullName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "text":
                setText(e.target.value);
                break;
            default:
                console.log('State '+e.target.name+' undefined');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(fullName.trim() && email.trim() && text.trim()){
            let createdAt = new Date().toString().slice(0, 25);
            onAdd([
                {
                    fullName,
                    email,
                    text,
                    createdAt
                }
            ]);
            setFullName('');
            setEmail('');
            setText('');
        } else {
            alert('Заполните все поля');
        }

    }

    return (
        <div style={{ margin: '20px' }}>
            <Typography variant={'h5'} component={'h5'} style={{marginBottom: '15px'}}>
                Обратная связь:
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    '& > :not(style)': {width: '100%', mb: '20px' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    size="small"
                    value={fullName}
                    label="Имя"
                    onChange={handleChange}
                    variant="outlined"
                    name={'fullName'}
                />
                <TextField
                    size="small"
                    value={email}
                    label="Почта"
                    onChange={handleChange}
                    variant="outlined"
                    name={'email'}
                />
                <TextField
                    label="Текст"
                    value={text}
                    placeholder="Введите текст..."
                    onChange={handleChange}
                    multiline
                    minRows={5}
                    name={'text'}
                />
                <Button
                    variant="contained"
                    type={'submit'}
                >
                    Отправить
                </Button>
            </Box>
        </div>
    );
};

export default FeedBackFormComponent;