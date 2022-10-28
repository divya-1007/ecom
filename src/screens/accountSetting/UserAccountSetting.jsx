import React from 'react'
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const UserSettings = () => {
  return (
    <div className="card-body">
    <div className="table-responsive">
        <table width="100%">
            <thead>
                <tr>
                    <td>Product</td>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Price</td>
                    <td>Status</td>
                    <td>Details</td>
                </tr>
            </thead>
            <tbody>
                 <tr>
                    <td>kshxjs</td>
                    <td>kshxjs</td>
                    <td><p style={{display: "-webkit-box", maxWidth:" 200px","-webkitLineClamp": "2", "-webkitBoxOrient": "vertical", 
                    overflow: "hidden",}}>jshxbxhxb</p></td>
                    <td>1009</td>
                    <td><span class="status purple"></span>Inactive</td>
                    <td className='m-2'><Link to={`/dashboard/product`}>
                    <Button style={{background:'#ff0066',border:'none' }}>Detail</Button>
                    </Link></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}
