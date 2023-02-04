import { Form, Button, Container, Modal } from 'react-bootstrap';
import { useState } from 'react'
import * as Api from "../api";
import { useNavigate } from 'react-router-dom'

function AccountSignout() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("")

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const formdata = {password}

        await Api.post('user/password/check', formdata)
            .then(res => {
                Api.delete('users',res.data._id)
            })
            .then(res => {
                localStorage.removeItem("token");
                alert("계정정보가 안전하게 삭제되었습니다.")
                navigate('/');
            }).catch(err => {
                alert("비밀번호를 다시 확인해주세요");
                handleClose();
                
        })

        setPassword("");
    }

    return (<>
        <h2>계정삭제</h2>
        <Container className="password-form-container">
            <Form className="password-form" id="passwordForm" onSubmit={handleSubmit}>
                <p className="text-primary">계정 삭제를 진행합니다</p>
                <Form.Group controlId="passwordInput">
                    <Form.Label>현재 비밀번호</Form.Label>
                    <Form.Control type="password" placeholder="비밀번호를 입력하세요" value={password} name="password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" onClick={handleShow}>
                    안전하게 계정 삭제하기
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>계정 삭제</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>회원정보 삭제 시 복구할 수 없습니다. 정말로 삭제하시겠습니까?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            아니오
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            예
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </Container>

    </>
    )
}

export default AccountSignout;