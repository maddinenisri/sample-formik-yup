import React, { useState, useEffect } from "react";
import { filter } from "rxjs/operators";
import { globalSubject } from "./CustomSubject";

const SubscriberComponent = props => {
  const [topic] = useState(props.topic);
  const [data, setData] = useState("");

  useEffect(() => {
    const subscription = globalSubject
      .pipe(filter(f => f.topic == topic))
      .subscribe(s => setData(s.data));
    return () => {
      subscription.unsubscribe();
    };
  });

  return props.children(data);
};

export default SubscriberComponent;