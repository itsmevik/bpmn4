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
    this.state = { value: "", suggestions: [], buttonActive: true };
    //console.log(this.props);
  }

  onChange = (event, { newValue, method }) => {
    this.setState({ value: newValue });
  };

  fetchGetAllUsers = async (user, search_term) => {
    //console.log("fetch", search_term);
    const res = await fetch("/laravel/companies/get-all-users", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        user_sub: user.sub,
        search_term: search_term,
      }),
    });
    const allUsers = res.ok ? await res.json() : null;
    //console.log(allUsers.users.map((user) => user));
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

    // console.log(val);
  };

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };
  onSuggestionSelected = (event, { suggestion, method }) => {
    if (method == "enter") {
      event.preventDefault();
    } else {
      this.setState({ buttonActive: false });
      event.preventDefault();
    }
  };

  handleSubmit() {
    // console.log("clicked");
    // console.log(this.props);
    this.props.onSubmit(this.state.value);

    setTimeout(() => {
      this.state.value = "";
      this.setState({ buttonActive: true });
    }, 800);
  }
  handleClose() {
    this.props.setClose(false);
    this.state.value = "";
    this.setState({ buttonActive: true });
  }

  render() {
    const { value, suggestions } = this.state;

    const theme = {
      container: {
        position: "relative",
      },
      input: {
        width: 280,
        height: 40,
        padding: "10px 20px",
        fontFamily: "Helvetica, sans-serif",
        fontWeight: 300,
        fontSize: 16,
        border: "1px solid #aaa",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
      },
      inputFocused: {
        outline: "none",
      },
      inputOpen: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
      suggestionsContainer: {
        display: "none",
      },
      suggestionsContainerOpen: {
        display: "block",
        //position: "absolute",
        top: 51,
        width: 280,
        border: "1px solid #aaa",
        backgroundColor: "#fff",
        fontFamily: "Helvetica, sans-serif",
        fontWeight: 300,
        fontSize: 16,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        zIndex: 2,
      },
      suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: "none",
      },
      suggestion: {
        cursor: "pointer",
        padding: "10px 20px",
      },
      suggestionHighlighted: {
        backgroundColor: "#ddd",
      },
    };
    // console.log(this.state.value);
    const inputProps = {
      placeholder: "Search User",
      value,
      onChange: this.onChange,
      required: "true",
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
          <DialogTitle id="alert-dialog-slide-title">{"ADD USER"}</DialogTitle>

          <DialogContent className="dialog-content">
            {/* <DialogContentText id="alert-dialog-slide-description"></DialogContentText> */}

            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              onSuggestionSelected={this.onSuggestionSelected}
              inputProps={inputProps}
              theme={theme}
            />
          </DialogContent>
          <DialogActions className="footer">
            <Button onClick={() => this.handleClose()} color="primary">
              Cancel
            </Button>
            <Button
              disabled={this.state.buttonActive}
              color="primary"
              variant="contained"
              onClick={() => this.handleSubmit()}
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
