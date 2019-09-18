import React from "react";
import ProducerComponent from "./ProducerComponent";
import SubscriberComponent from "./SubscriberComponent";
import * as topics from "./topics";

const SampleComponent = () => (
  <div className="container">
    <div className="row mb-5">
      <div className="col-lg-12 text-center">
        <h1 className="mt-5">RxJS Pub Sub Interaction</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <ProducerComponent />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <SubscriberComponent topic={topics.ALERT_TOPIC}>
          {text => <div className="form-group"><p>{text}</p></div>}
        </SubscriberComponent>
      </div>
    </div>
  </div>
);

export default SampleComponent;
