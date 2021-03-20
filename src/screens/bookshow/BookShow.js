import { Typography } from '@material-ui/core';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import Details from '../details/Details';
import './BookShow.css';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class BookShow extends Component {
    
    constructor() {
        super();
        this.state = {
            location: "",
            langauge: "",
            showdate: "",
            showtime: ""
        }
    }
    
    backtodetailsHandler = () => {
        ReactDOM.render(<Details movieId={this.props.movieId} />, document.getElementById('root'));
    }

    locationChangeHandler = event => {
        this.setState({location : event.target.value});
    }

    languageChangeHandler = event => {
        this.setState({langauge : event.target.value});
    }

    showDateChangeHandler = event => {
        this.setState({showdate : event.target.value});
    }

    showTimeChangeHandler = event => {
        this.setState({showtime: event.target.value});
    }
    
    
    render() {
        return(
            <div>
                <Header/>
                <div className="bookShow">
                    <Typography className="back" onClick={this.backtodetailsHandler}>
                        &#60; Back to Movie Details
                    </Typography>
                    <Card className="cardStyle">
                        <CardContent>
                        <Typography variant="headline" component="h2">
                            BOOK SHOW
                        </Typography><br />
                        <FormControl required className="formControl">
                            <InputLabel htmFor="location"> Choose Location </InputLabel>
                            <Select 
                                value={this.state.location}
                                onChange={this.locationChangeHandler}>
                                {location.map(loc => (
                                    <MenuItem key={"loc" + loc.id} value={loc.location}>
                                        {loc.location}
                                    </MenuItem>
                                ))}
                                </Select>
                        </FormControl>
                        <FormControl required className="formControl">
                            <InputLabel htmFor="language"> Choose Language </InputLabel>
                            <Select 
                                value={this.state.langauge}
                                onChange={this.languageChangeHandler}>
                                {language.map(lang => (
                                    <MenuItem key={"lang" + lang.id} value={lang.language}>
                                        {lang.language}
                                    </MenuItem>
                                ))}
                                </Select>                                
                        </FormControl>
                        <FormControl required className="formControl">
                            <InputLabel htmFor="showdate"> Show Date </InputLabel>
                            <Select 
                                value={this.state.showdate}
                                onChange={this.showDateChangeHandler}>
                                {showDate.map(showdate => (
                                    <MenuItem key={"lang" + showdate.id} value={showdate.showDate}>
                                        {showdate.showDate}
                                    </MenuItem>
                                ))}
                                </Select>                                
                        </FormControl>
                        <FormControl required className="formControl">
                            <InputLabel htmFor="showtime"> Show Time </InputLabel>
                            <Select 
                                value={this.state.showtime}
                                onChange={this.showTimeChangeHandler}>
                                {showTime.map(showtime => (
                                    <MenuItem key={"lang" + showtime.id} value={showtime.showTime}>
                                        {showtime.showTime}
                                    </MenuItem>
                                ))}
                                </Select>                                
                        </FormControl>                                              
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default BookShow;