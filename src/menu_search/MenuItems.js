import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import SearchBar from "material-ui-search-bar";
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function MenuItems(props) {
    console.log(props.menuData)
    const [searched, setSearched] = useState("");

    const requestSearch = (searchedVal) => {
        // const filteredRows = originalRows.filter((row) => {
        //     return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        // });
        // setRows(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };
    return (<>
        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, borderBottom: "1px solid lightgray" }}>
            <SearchBar
                value={searched}
                onChange={(searchVal) => props.requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
            />
        </Paper>
        {
            props.menuData && props.menuData.length > 0 && props.menuData.map(item => {
                return (
                    <Paper key={item.id} sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, borderBottom: "1px solid lightgray" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" >
                                    <Grid item xs sx={{ textAlign: "left" }}>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="subtitle1" component="div">
                                            ₹{item.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item>
                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                    <Img alt="complex" src={item.cloudinaryImageId} />
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </Paper>)
            })
        }
    </>
    );
}
