import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';

    class ArticleEdit extends Component {
      constructor (props) {
        super(props)
        this.state = {
          title: '',
          merk: '',
          year: '',
          content: '',
          alert: null,
          message:'',
          errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleUpdateArticle = this.handleUpdateArticle.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
      }

      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      componentDidMount () {

        const articleId = this.props.match.params.id

        axios.get(`/api/article/edit/${articleId}`).then(response => {
          this.setState({
            title: response.data.title,
            merk: response.data.merk,
            year: response.data.year,
            content: response.data.content,
          })
        })
      }

      goToHome(){
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
                >
                {this.state.message}
            </SweetAlert>
          );
          this.setState({
            alert: getAlert()
          });
      }

      onSuccess() {
        this.props.history.push('/');
      }

      hideAlert() {
        this.setState({
          alert: null
        });
      }

      handleUpdateArticle (event) {
        event.preventDefault()

        const article = {
          title: this.state.title,
          merk: this.state.merk,
          year: this.state.year,
          content: this.state.content
        }

        const articleId = this.props.match.params.id

        axios.put(`/api/article/${articleId}`, article)
          .then(response => {
            // redirect to the homepage
            var msg = response.data.success;
            if(msg == true){
                this.setState({
                    message: response.data.message
                })
                return this.goToHome();
            }

          });
      }

      hasErrorFor (field) {
        return !!this.state.errors[field]
      }

      renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
          return (
            <span className='invalid-feedback'>
              <strong>{this.state.errors[field][0]}</strong>
            </span>
          )
        }
      }

      render () {
        const { article } = this.state
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Edit Bike</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleUpdateArticle}>
                      <div className='form-group'>
                        <label htmlFor='title'>Seri</label>
                        <input
                          id='title'
                          type='text'
                          className={`form-control ${this.hasErrorFor('title') ? 'is-invalid' : ''}`}
                          name='title'
                          value={this.state.title}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('title')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='merk'>Merk</label>
                        <input
                          id='merk'
                          type='text'
                          className={`form-control ${this.hasErrorFor('merk') ? 'is-invalid' : ''}`}
                          name='merk'
                          value={this.state.merk}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('merk')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='year'>Year</label>
                        <input
                          id='year'
                          type='text'
                          className={`form-control ${this.hasErrorFor('year') ? 'is-invalid' : ''}`}
                          name='year'
                          value={this.state.year}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('year')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='content'>Deskripsi</label>
                        <textarea
                          id='content'
                          className={`form-control ${this.hasErrorFor('content') ? 'is-invalid' : ''}`}
                          name='content'
                          rows='10'
                          value={this.state.content}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('content')}
                      </div>
                      <Link
                        className='btn btn-secondary'
                        to={`/`}
                        >Back
                      </Link>
                      <button className='btn btn-primary'>Update</button>
                      {this.state.alert}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
export default ArticleEdit
