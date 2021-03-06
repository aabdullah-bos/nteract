import * as React from "react";
import TimeAgo from "react-timeago";

type LastSavedProps = {
  lastModified?: Date | null;
};

export class LastSaved extends React.Component<LastSavedProps> {
  static defaultProps = {
    lastModified: null
  };

  render() {
    return (
      <td className="timeago">
        {this.props.lastModified != null && (
          <TimeAgo date={this.props.lastModified} />
        )}
        <style jsx>{`
          .timeago {
            text-align: right;
            color: #6a737d;
            padding-right: 10px;
          }
        `}</style>
      </td>
    );
  }
}
