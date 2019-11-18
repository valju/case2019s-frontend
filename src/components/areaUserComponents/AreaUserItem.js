class AreaUserItem extends Component {
  render() {
    const { firstName, lastName, name } = this.props.item
    return (

          <li>
        Area "{name}" of User {firstName}, {lastName}, {email}
        <hr />
      </li>
      );
  }
}

export default AreaUserItem;
