

      })
    }
  
    render() {
  
      const { custID, accountName, accountNumber, availableBal, linked } = this.state
  
      if (this.props.user) {
        return (
          <div>
            <h4> Registration</h4>
            <div className='form-group' style={{ margin: '0px' }}>
              <div className='form-group'>
                <label>Customer ID: </label>
                <input className='form-control' type="int" value={custID} onChange={this.handleChangeCustID} />
  
                <div>
                  <table className="accounts-table">
                    <thead>
                      <tr>
                        <th align="right">Account Name</th>
                        <th align="right">Account Number</th>
                        <th align="right">Available Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.data.map((elem, idx) => (
                        <tr key={idx}>
                          <th scope="row">{elem.accountName}</th>
                          <th align="right">{elem.accountNumber}</th>
                          <th align="right">{elem.availableBal}</th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
  
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button className='btn btn-light btn-md' style={{ width: '150px' }} onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <h2> You're not logged in </h2>
          </div>
        )
      }
  
    }
  }
  
  export default Account;