const express = require("express");
const orderRouter = express.Router();
const { loginRequired } = require("../middlewares/loginRequired");
const { orderService } = require("../services/orderService");

// 사용자) 상품 주문하기
orderRouter.post("/order", loginRequired, async (req, res, next) => {
  try {
    // req (request) 에서 데이터 가져오기
    const { userId, totalPrice, address, request } = req.body;

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

// (현재 로그인한)사용자) 주문 조회
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

// 사용자) 특정 주문 조회
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

// 사용자) 특정 주문 수정
orderRouter.patch(
  "/orders/:orderId",
  loginRequired,
  async function (req, res, next) {
    try {
      // req (request) 에서 데이터 가져오기
      const orderId = req.params.orderId;
      const { address, request, status } = req.body;

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

// 사용자) 특정 주문 삭제
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
