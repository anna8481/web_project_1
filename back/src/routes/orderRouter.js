const express = require("express");
const orderRouter = express.Router();
const { adminOnly } = require("../middlewares/adminOnly");
const { loginRequired } = require("../middlewares/loginRequired");
const { orderService } = require("../services/orderService");

// 사용자) 장바구니 상품 주문
orderRouter.post("/order", loginRequired, async (req, res, next) => {
  try {
    // req (request) 에서 데이터 가져오기
    const { userId, productId, totalPrice, address } = req.body;

    // 주문 db에 추가
    const newOrder = await orderService.addOrder({
      userId,
      productId,
      totalPrice,
      address,
    });

    res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
});

// 사용자) 주문 목록 조회
orderRouter.get("/orderlist/user",
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

// 사용자) 주문 정보 조회
orderRouter.get("/orders/:orderId",
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

// 사용자) 배송 시작전 주문 정보 수정
orderRouter.patch("/orders/:orderId",
  loginRequired,
  async function (req, res, next) {
    try {
      // req (request) 에서 데이터 가져오기
      const orderId = req.params.orderId;
      const address = req.body;

      // 없던 값이였으면 update
      const toUpdate = {
        ...(address && { address }),
      };

      // 제품 정보 업데이트
      const updatedOrder = await orderService.setOrder(orderId, toUpdate);

      res.status(200).json(updatedOrder);
    } catch (error) {
      next(error);
    }
  }
);

// 사용자) 주문 내역 취소(삭제)
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

// 관리자) 전체 주문목록 조회
orderRouter.get("/admin/orderslist/all",
  adminOnly,
  async function (req, res, next) {
    try {
      const orders = await orderService.getOrders();

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
);

// 관리자) 주문 상태 관리
orderRouter.patch("/admin/orders/:orderId",
  adminOnly,
  async function (req, res, next) {
    try {
      // req (request) 에서 데이터 가져오기
      const orderId = req.params.orderId;
      const { address, status } = req.body;

      // 없던 값이였으면 update
      const toUpdate = {
        ...(address && { address }),
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

//관리자) 주문 취소 (사용자의 주문내역 삭제)
orderRouter.delete("/admin/orders/:orderId",
  adminOnly,
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