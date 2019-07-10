/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-07-10 08:37:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for item_table
-- ----------------------------
DROP TABLE IF EXISTS `item_table`;
CREATE TABLE `item_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `price` float NOT NULL,
  `count` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of item_table
-- ----------------------------
INSERT INTO `item_table` VALUES ('1', '测试', '19.8', '298');
INSERT INTO `item_table` VALUES ('2', 'item1', '19.8', '200');
INSERT INTO `item_table` VALUES ('3', '衣服', '12.5', '50');
INSERT INTO `item_table` VALUES ('4', '裤子', '12.5', '58');
INSERT INTO `item_table` VALUES ('11', 'ss', '34', '4');
INSERT INTO `item_table` VALUES ('10', 'qqq', '23', '33');
INSERT INTO `item_table` VALUES ('9', 'aaa', '654', '321');
INSERT INTO `item_table` VALUES ('7', 'eee', '78', '22');
