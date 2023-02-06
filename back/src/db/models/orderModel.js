const { model } = require("mongoose");
const { OrderSchema } = require("../schemas/orderSchema");

const Order = model("orders", OrderSchema);

class OrderModel {
  async findById(orderId) {
    const order = await Order.findOne({ _id: orderId });
    return order;
  }

  async findAllByUserId(userId) {
    const orders = await Order.find({ userId });
    return orders;
  }

  async create(orderInfo) {
    const createdNewOrder = await Order.create(orderInfo);
    return createdNewOrder;
  }

  async update({ orderId, update }) {
    const filter = { _id: orderId };
    const option = { returnOriginal: false };

    const updatedOrder = await Order.findOneAndUpdate(filter, update, option);
    return updatedOrder;
  }

  async findAll() {
    const orders = await Order.find({});
    return orders;
  }

  async deleteById(orderId) {
    const result = await Order.deleteOne({ _id: orderId });
    return result;
  }
}


module.exports = OrderModel;

const orderModel = new OrderModel();

module.exports = { orderModel };
