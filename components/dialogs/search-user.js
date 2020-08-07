import React from "react";

import Autosuggest from "react-autosuggest";
import { TableRow } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import DialogTitle from "@material-ui/core/DialogTitle";
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import { OutlinedInput } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const getSuggestionValue = (suggestion) => suggestion.email;
const renderSuggestion = (suggestion) => <span>{suggestion.email}</span>;

export default class SerachUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", suggestions: [] };
    console.log(this.props);
  }

  onChange = (event, { newValue, method }) => {
    this.setState({ value: newValue });
  };

  fetchGetAllUsers = async (user, search_term) => {
    console.log("fetch", search_term);
    const res = await fetch("/laravel/companies/get-all-users", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        user_sub: user.sub,
        search_term: search_term,
      }),
    });
    const allUsers = res.ok ? await res.json() : null;
    console.log(allUsers.users.map((user) => user));
    return allUsers;
  };
  onSuggestionsFetchRequested = ({ value }) => {
    // fetch(`https://swapi.co/api/people/?search=${value}`)
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ suggestions: data.results }));

    const val = this.fetchGetAllUsers(this.props.user, value).then(
      (AllUsersData) => {
        if (AllUsersData) {
          this.setState({
            suggestions: AllUsersData.users.map((row) => row),
          });
        }
      }
    );

    console.log(val);
  };

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  render() {
    const { value, suggestions } = this.state;
    console.log(this.state.value);
    const inputProps = {
      placeholder: "Search Users",
      value,
      onChange: this.onChange,
    };

    return (
      <div>
        <Dialog
          open={this.props.open}
          TransitionComponent={Transition}
          maxWidth="false"
          keepMounted
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"Add User"}</DialogTitle>

          <DialogContent className="dialog-content">
            <DialogContentText id="alert-dialog-slide-description"></DialogContentText>

            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              // onSuggestionSelected={onSuggestion}
              inputProps={inputProps}
            />
          </DialogContent>
          <DialogActions className="footer">
            <Button
              onClick={() => {
                this.props.setClose(false);
              }}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={() => this.props.onSubmit(this.state.value)}
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
