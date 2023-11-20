import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from '@nextui-org/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const cellStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  maxWidth: '150px' // Set your preferred maximum width for most columns
}

const imageCellStyle = {
  overflow: 'hidden',
  maxWidth: '100px', // Set your preferred maximum width for the image column
  maxHeight: '60px', // Set your preferred maximum height for the image column
  whiteSpace: 'normal', // Allow content to wrap onto the next line
  textOverflow: 'ellipsis' // Display ellipsis (...) for truncated text
}

export default function PostAdmin() {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const rowsPerPage = 2
  const api = 'http://localhost:5000/Post/recruitment'
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage
    return data.slice(start, end)
  }, [page, data])

  const handleEdit = (postId) => {
    console.log(`Edit button clicked for post with id: ${postId}`)
  }

  const handleDelete = (postId) => {
    console.log(`Delete button clicked for post with id: ${postId}`)
    axios
      .delete(`http://localhost:5000/post/delete/${postId}`)
      .then((res) => {
        console.log('Thành công xóa');
        window.location.reload();
      })
      .catch((error) => {
        alert('Lỗi')
        console.log(error)
      })
  }

  return (
    <div style={{ marginTop: '50px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px', color: '#1890ff' }}>Danh Sách Tuyển Dụng</h1>
      <div>
        <Table
          aria-label='Example table with client-side pagination'
          bottomContent={
            <div className='flex w-full justify-center'>
              <Pagination
                isCompact
                showControls
                showShadow
                color='secondary'
                page={page}
                total={data.length - 1}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
          classNames={{
            wrapper: 'min-h-[222px]'
          }}
          style={{
            tableLayout: 'fixed',
            width: '100%'
          }}
        >
          <TableHeader>
            <TableColumn key='congti' style={{ width: '12.5%' }}>
              <span style={{ fontWeight: 'bold', color: '#1890ff' }}>Công Ti</span>
            </TableColumn>

            <TableColumn key='luong' style={{ width: '12.5%' }}>
              <span style={{ fontWeight: 'bold', color: '#1890ff' }}>Lương</span>
            </TableColumn>

            <TableColumn key='vitri' style={{ width: '12.5%', ...imageCellStyle }}>
              <span style={{ fontWeight: 'bold', color: '#1890ff' }}>Vị Trí</span>
            </TableColumn>

            <TableColumn key='khuvuc' style={{ width: '12.5%' }}>
              <span style={{ fontWeight: 'bold', color: '#1890ff' }}>Khu Vực</span>
            </TableColumn>

            <TableColumn key='level' style={{ width: '12.5%' }}>
              <span style={{ fontWeight: 'bold', color: '#1890ff' }}>Level</span>
            </TableColumn>

            <TableColumn key='timedang' style={{ width: '12.5%' }}>
              <span style={{ fontWeight: 'bold', color: '#1890ff' }}>Thời gian đăng</span>
            </TableColumn>

            <TableColumn key='actions' style={{ width: '12.5%' }}>
              <span style={{ fontWeight: 'bold', color: '#1890ff' }}>Hành động</span>
            </TableColumn>
          </TableHeader>

          <TableBody items={items}>
            {(item) => (
              <TableRow key={item._id}>
                {(columnKey) => (
                  <TableCell>
                    {columnKey === 'actions' ? (
                      <div>
                        <Button
                          color='success'
                          style={{ marginRight: '5px', width: '80px' }}
                          onClick={() => handleEdit(item._id)}
                        >
                          <a href={`/Edit/recruitment/${item._id}`}>Edit</a>
                        </Button>
                        <Button color='red' style={{ width: '80px' }} onClick={() => handleDelete(item._id)}>
                          Delete
                        </Button>
                      </div>
                    ) : (
                      <span style={columnKey === 'vitri' || columnKey === 'anh' ? imageCellStyle : cellStyle}>
                        {item[columnKey]}
                      </span>
                    )}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

// <TableHeader>
// <TableColumn key='congti' style={{ width: '12.5%' }}>
//   <span style={{ fontWeight: 'bold', color: '#1890ff' }}>Công Ti</span>
// </TableColumn>

// <TableColumn key='luong' style={{ width: '25.0%' }}>
//   <span style={{ fontWeight: 'bold', color: '#1890ff' }}>Lương</span>
// </TableColumn>

// <TableColumn key='vitri' style={{ width: '12.5%' }}>
//   <span style={{ fontWeight: 'bold', color: '#1890ff' }}>Vị Trí</span>
// </TableColumn>

// <TableColumn key='khuvuc' style={{ width: '12.5%' }}>
//   <span style={{ fontWeight: 'bold', color: '#1890ff' }}>Khu Vực</span>
// </TableColumn>

// <TableColumn key='level' style={{ width: '12.5%' }}>
//   <span style={{ fontWeight: 'bold', color: '#1890ff' }}>Level</span>
// </TableColumn>

// <TableColumn key='anh' style={{ width: '12.5%' }}>
//   <span style={{ fontWeight: 'bold', color: '#1890ff' }}>Ảnh</span>
// </TableColumn>

// <TableColumn key='timedang' style={{ width: '12.5%' }}>
//   <span style={{ fontWeight: 'bold', color: '#1890ff' }}>Thời gian đăng</span>
// </TableColumn>

// <TableColumn key='actions' style={{ width: '12.5%' }}>
//   <span style={{ fontWeight: 'bold', color: '#1890ff' }}>Hành động</span>
// </TableColumn>
// </TableHeader>

// <TableColumn key='anh' style={{ width: '12.5%', ...imageCellStyle }}>
// <span style={{ fontWeight: 'bold', color: '#1890ff' }}>Ảnh</span>
// </TableColumn>
