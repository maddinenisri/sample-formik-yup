import React from "react";
import * as topics from "./topics";
import { publisher } from "./CustomSubject";

const ProducerComponent = () => (
  <div class="form-group">
    <button className="btn btn-primary mr-2" onClick={() => publisher(topics.ALERT_TOPIC, "Sample Message")}>
      Publish Message
    </button>
  </div>
);

export default ProducerComponent;