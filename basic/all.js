/*
 * @Descripttion: 
 * @Author: tianxiangbing
 * @Date: 2019-04-01 13:39:31
 * @LastEditTime: 2021-04-22 15:40:23
 * @github: https://github.com/tianxiangbing
 */
import React, { Component } from 'react';
const { NumberInput } = require('jsx-input');

const RadioList = require('x-radio-list');
const Fold = require('x-fold');

require('x-fold/lib/index.css')

require('x-radio-list/lib/index.css');

// const FormItem = Form.Item;
const RadioItem = RadioList.Radio;
const FoldItem = Fold.Panel;

module.exports = {
    NumberInput,RadioList,Fold
}