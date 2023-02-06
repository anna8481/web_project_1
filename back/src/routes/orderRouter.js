const express = require("express");
const orderRouter = express.Router();
const { loginRequired } = require("../middlewares/loginRequired");
const { orderService } = require("../services/orderService");


orderRouter.post("/order", loginRequired, async (req, res, next) => {
  try {
    // req (request) 에서 데이터 가져오기
    const userId = req.body.userId;
    const totalPrice = req.body.totalPrice;
    const address = req.body.address;
    const request = req.body.request;

    // 위 데이터를 제품 db에 추가
    const newOrder = await orderService.addOrder({
      userId,
      totalPrice,
      address,
      request,
    });

    res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
});


// 특정 사용자(현재 로그인한 사용자)의 주문 조회
orderRouter.get(
  "/orderlist/user",
  loginRequired,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;

      const orders = await orderService.getOrdersByUserId(userId);

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
);

orderRouter.get(
  "/orders/:orderId",
  loginRequired,
  async function (req, res, next) {
    try {
      const orderId = req.params.orderId;
      const orderData = await orderService.getOrderData(orderId);

      res.status(200).json(orderData);
    } catch (error) {
      next(error);
    }
  }
);

orderRouter.patch(
  "/orders/:orderId",
  loginRequired,
  async function (req, res, next) {
    try {
      // req (request) 에서 데이터 가져오기
      const orderId = req.params.orderId;
      const address = req.body.address;
      const request = req.body.request;
      const status = req.body.status;

      // 없던 값이였으면 update
      const toUpdate = {
        ...(address && { address }),
        ...(request && { request }),
        ...(status && { status }),
      };

      // 제품 정보 업데이트
      const updatedOrder = await orderService.setOrder(orderId, toUpdate);

      res.status(200).json(updatedOrder);
    } catch (error) {
      next(error);
    }
  }
);

//확인중
orderRouter.delete(
  "/orders/:orderId",
  loginRequired,
  async function (req, res, next) {
    try {
      const orderId = req.params.orderId;
      const deleteResult = await orderService.deleteOrderData(orderId);
  
      res.status(200).json(deleteResult);
    } catch (error) {
      next(error);
    }
  }
);


module.exports = orderRouter;
