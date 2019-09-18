import React, { Component } from "react";

const withLazyLoader = importComponent => {
  return class extends Component {
    state = {
      component: null
    };

    componentDidMount() {
      importComponent().then(cmp => {
        this.setState({ component: cmp.default });
      });
    }

    render() {
      const CustomComponent = this.state.component;
      return CustomComponent ? <CustomComponent {...this.props} /> : null;
    }
  };
};

export default withLazyLoader;
