const http=require('http')
const express=require('express')
const cors= require('cors')

//Crear el servidor
const app=express()
const {Server, Socket}=require('socket.io')

const fs=require('fs')
const archivo='../archivo.txt'
const datos='datos.txt'