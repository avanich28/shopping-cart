var $fwLjc$mongoose = require("mongoose");
var $fwLjc$dotenv = require("dotenv");
var $fwLjc$express = require("express");
require("morgan");
var $fwLjc$crypto = require("crypto");
var $fwLjc$util = require("util");
var $fwLjc$jsonwebtoken = require("jsonwebtoken");
var $fwLjc$bcryptjs = require("bcryptjs");
var $fwLjc$htmltotext = require("html-to-text");
var $fwLjc$nodemailer = require("nodemailer");
var $fwLjc$pug = require("pug");



$fwLjc$dotenv.config({
    path: "./config.env"
});
var $29b9e99e269db72b$exports = {};


var $06b374d3c618349c$exports = {};

var $809416b88052d20d$export$7200a869094fec36;
var $809416b88052d20d$export$596d806903d1f59e;
var $809416b88052d20d$export$a0973bcfe11b05c9;
// TODO jwt
var $809416b88052d20d$export$eda7ca9e36571553;
// BUG show in view
var $809416b88052d20d$export$256a5a3564694cfc;
var $809416b88052d20d$export$37ac0238687b67ae;
var $809416b88052d20d$export$dc726c8e334dd814;
var $809416b88052d20d$export$e2853351e15b7895;


var $809416b88052d20d$require$promisify = $fwLjc$util.promisify;

var $41ef52c26e228989$exports = {};



const $41ef52c26e228989$var$userSchema = new $fwLjc$mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Please tell use your name!"
        ]
    },
    email: {
        type: String,
        required: [
            true,
            "Please provide your email"
        ],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [
            true,
            "Please provide a password"
        ],
        minlength: 8,
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [
            true,
            "Please confirm your password"
        ],
        validate: {
            validator: function(el) {
                return el === this.password;
            },
            message: "Passwords are not the same"
        }
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
});
$41ef52c26e228989$var$userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) next();
    this.password = await $fwLjc$bcryptjs.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
});
$41ef52c26e228989$var$userSchema.pre("save", async function(next) {
    if (!this.isModified("password") || this.isNew) return next();
    this.passwordChangedAt = Date.now() - 1000;
    next();
});
$41ef52c26e228989$var$userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
    return await $fwLjc$bcryptjs.compare(candidatePassword, userPassword);
};
$41ef52c26e228989$var$userSchema.methods.createPasswordResetToken = function() {
    const resetToken = $fwLjc$crypto.randomBytes(32).toString("hex");
    this.passwordResetToken = $fwLjc$crypto.createHash("sha256").update(resetToken).digest("hex");
    this.passwordResetExpires = Date.now() + 600000;
    return resetToken;
};
$41ef52c26e228989$var$userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
        return JWTTimestamp < changedTimestamp;
    }
    return false;
};
const $41ef52c26e228989$var$User = $fwLjc$mongoose.model("User", $41ef52c26e228989$var$userSchema);
$41ef52c26e228989$exports = $41ef52c26e228989$var$User;


var $26fa6d4858ca3b3d$exports = {};
$26fa6d4858ca3b3d$exports = (fn)=>(req, res, next)=>{
        fn(req, res, next).catch(next);
    };


var $a47d181581b6c561$exports = {};
class $a47d181581b6c561$var$AppError extends Error {
    constructor(msg, statusCode){
        super(msg);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
$a47d181581b6c561$exports = $a47d181581b6c561$var$AppError;


var $11d3d8172c2e369d$exports = {};
var $11d3d8172c2e369d$var$__dirname = "utils";

var $11d3d8172c2e369d$require$convert = $fwLjc$htmltotext.convert;


$11d3d8172c2e369d$exports = class Email {
    constructor(user, url){
        this.to = user.email;
        this.firstName = user.name.split(" ")[0];
        this.url = url;
        this.from = `Nara Kamakura <${undefined}>`;
    }
    newTransport() {
        return $fwLjc$nodemailer.createTransport({
            host: undefined,
            port: undefined,
            auth: {
                user: undefined,
                pass: undefined
            }
        });
    }
    async send(template, subject) {
        const html = $fwLjc$pug.renderFile(`${$11d3d8172c2e369d$var$__dirname}/../views/${template}.pug`, {
            fistName: this.firstName,
            url: this.url,
            subject: subject
        });
        const mailOption = {
            from: this.from,
            to: this.to,
            subject: subject,
            html: html,
            text: $11d3d8172c2e369d$require$convert(html)
        };
        await this.newTransport().sendMail(mailOption);
    }
    async sendWelcome() {
        await this.send("welcome", "Welcome to Pizzeria!");
    }
    async sendPasswordReset() {
        await this.send("passwordReset", "Your password reset token (valid for only 10 minutes)");
    }
};


const $809416b88052d20d$var$signToken = (id)=>$fwLjc$jsonwebtoken.sign({
        id: id
    }, undefined, {
        expiresIn: undefined
    });
const $809416b88052d20d$var$createSendToken = (user, statusCode, req, res)=>{
    const token = $809416b88052d20d$var$signToken(user._id);
    res.cookie("jwt", token, {
        expires: new Date(Date.now() + NaN),
        httpOnly: true,
        secure: req.secure || req.headers["x-forwarded-proto"] === "https"
    });
    user.password = undefined;
    res.status(statusCode).json({
        status: "success",
        token: token,
        data: {
            user: user
        }
    });
};
$809416b88052d20d$export$7200a869094fec36 = $26fa6d4858ca3b3d$exports(async (req, res, next)=>{
    const newUser = await $41ef52c26e228989$exports.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        passwordChangedAt: req.body.passwordChangedAt
    });
    // TODO
    const url = `${req.protocol}://${req.get("host")}/users/me`;
    await new $11d3d8172c2e369d$exports(newUser, url).sendWelcome();
    $809416b88052d20d$var$createSendToken(newUser, 201, req, res);
});
$809416b88052d20d$export$596d806903d1f59e = $26fa6d4858ca3b3d$exports(async (req, res, next)=>{
    const { email: email, password: password } = req.body;
    if (!email || !password) new $a47d181581b6c561$exports("Please provide email and password!", 400);
    const user = await $41ef52c26e228989$exports.findOne({
        email: email
    }).select("+password");
    const correct = await user.correctPassword(password, user.password);
    if (!user || !correct) return next(new $a47d181581b6c561$exports("Incorrect email or password", 401));
    $809416b88052d20d$var$createSendToken(user, 200, req, res);
});
$809416b88052d20d$export$a0973bcfe11b05c9 = (req, res)=>{
    res.cookie("jwt", "loggedout", {
        expires: new Date(Date.now() + 10000),
        httpOnly: true
    });
    res.status(200).json({
        status: "success"
    });
};
$809416b88052d20d$export$eda7ca9e36571553 = $26fa6d4858ca3b3d$exports(async (req, res, next)=>{
    let token;
    // postman
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) token = req.headers.authorization.split(" ")[1];
    else if (req.cookies.jwt) token = req.cookies.jwt;
    if (!token) return next(new $a47d181581b6c561$exports("You are not logged in! Please log in to get access", 401));
    const decoded = await $809416b88052d20d$require$promisify($fwLjc$jsonwebtoken.verify)(token, undefined);
    const currentUser = await $41ef52c26e228989$exports.findById(decoded.id);
    if (!currentUser) new $a47d181581b6c561$exports("The user belonging to this token does not longer exist.", 401);
    if (currentUser.changedPasswordAfter(decoded.iat)) return next(new $a47d181581b6c561$exports("User recently changed password! Please log in again", 401));
    // IMPT
    req.user = currentUser;
    // BUG
    res.locals.user = currentUser;
    next();
});
$809416b88052d20d$export$256a5a3564694cfc = async (req, res, next)=>{
    if (req.cookies.jwt) try {
        const decoded = await $809416b88052d20d$require$promisify($fwLjc$jsonwebtoken.verify)(req.cookies.jwt, undefined);
        const currentUser = await $41ef52c26e228989$exports.findById(decoded.id);
        if (!currentUser) next();
        if (currentUser.changedPasswordAfter(decoded.iat)) return next();
        res.locals.user = currentUser;
        return next();
    } catch (err) {
        return next();
    }
    next();
};
$809416b88052d20d$export$37ac0238687b67ae = $26fa6d4858ca3b3d$exports(async (req, res, next)=>{
    const user = await $41ef52c26e228989$exports.findOne({
        email: req.body.email
    });
    if (!user) return next(new $a47d181581b6c561$exports("There is no user with email address.", 404));
    const resetToken = user.createPasswordResetToken();
    await user.save({
        validateBeforeSave: false
    });
    try {
        const resetURL = `${req.protocol}://${req.get("host")}/api/v1/users/reset-password/${resetToken}`;
        await new $11d3d8172c2e369d$exports(user, resetURL).sendPasswordReset();
        res.status(200).json({
            status: "success",
            message: "Token sent to email!"
        });
    } catch (err) {
        console.error("\uD83D\uDCA5", err);
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save({
            validateBeforeSave: false
        });
        return next(new $a47d181581b6c561$exports("There was an error sending the email. Try again later!", 500));
    }
});
$809416b88052d20d$export$dc726c8e334dd814 = $26fa6d4858ca3b3d$exports(async (req, res, next)=>{
    const hashedToken = $fwLjc$crypto.createHash("sha256").update(req.params.token).digest("hex");
    const user = await $41ef52c26e228989$exports.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: {
            $gt: Date.now()
        }
    });
    if (!user) return next(new $a47d181581b6c561$exports("Token is invalid or has expired", 400));
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    $809416b88052d20d$var$createSendToken(user, 201, req, res);
});
$809416b88052d20d$export$e2853351e15b7895 = $26fa6d4858ca3b3d$exports(async (req, res, next)=>{
    const user = await $41ef52c26e228989$exports.findById(req.user.id).select("+password");
    if (!await user.correctPassword(req.body.passwordCurrent, user.password)) return next(new $a47d181581b6c561$exports("Your current password is wrong.", 401));
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();
    $809416b88052d20d$var$createSendToken(user, 200, req, res);
});


var $ea576216cc1b168f$export$85d699ca8330b9a9;
var $ea576216cc1b168f$export$5880729c5d131040;
// DELIVERY
var $ea576216cc1b168f$export$cbfde3d083bf31b0;
var $ea576216cc1b168f$export$16009ca59625b18f;
var $deed79460da4a90e$exports = {};

const $deed79460da4a90e$var$deliverySchema = new $fwLjc$mongoose.Schema({
    user: {
        type: $fwLjc$mongoose.Schema.ObjectId,
        ref: "User",
        required: [
            true,
            "Order must have user."
        ]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    tax: {
        type: Number,
        required: [
            true,
            "Order must have tax."
        ]
    },
    totalPrice: {
        type: Number,
        required: [
            true,
            "Order must have total price."
        ]
    },
    cart: [
        {
            name: String,
            unitPrice: Number,
            quantity: Number
        }
    ]
});
const $deed79460da4a90e$var$Delivery = $fwLjc$mongoose.model("Delivery", $deed79460da4a90e$var$deliverySchema);
$deed79460da4a90e$exports = $deed79460da4a90e$var$Delivery;




$ea576216cc1b168f$export$85d699ca8330b9a9 = $26fa6d4858ca3b3d$exports(async (req, res, next)=>{
    const user = await $41ef52c26e228989$exports.findById(req.user.id);
    if (!user) return next(new AppError("User data is not founded.", 401));
    res.status(200).json({
        status: "success",
        data: user
    });
});
$ea576216cc1b168f$export$5880729c5d131040 = $26fa6d4858ca3b3d$exports(async (req, res, next)=>{
    const user = await $41ef52c26e228989$exports.findByIdAndUpdate(req.user.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!user) return next(new AppError("User data is not founded.", 401));
    res.status(200).json({
        status: "success",
        data: user
    });
});
$ea576216cc1b168f$export$cbfde3d083bf31b0 = $26fa6d4858ca3b3d$exports(async (req, res, next)=>{
    const filter = {};
    const data = await $deed79460da4a90e$exports.find(filter);
    if (!data) return next(new AppError("Delivery data is not founded.", 401));
    res.status(200).json({
        status: "success",
        data: data
    });
});
$ea576216cc1b168f$export$16009ca59625b18f = $26fa6d4858ca3b3d$exports(async (req, res, next)=>{
    const data = await $deed79460da4a90e$exports.create({
        user: req.user.id,
        ...req.body
    });
    console.log(data);
    res.status(201).json({
        status: "success",
        data: data
    });
}); // exports.getDelivery = catchAsync(async (req, res, next) => {
 //   const data = await Delivery.findOne({ user: req.user.id });
 //   if (!data) {
 //     return next(new AppError("Delivery data is not founded.", 401));
 //   }
 //   res.status(200).json({ status: "success", data });
 // });


const $06b374d3c618349c$var$router = $fwLjc$express.Router();
$06b374d3c618349c$var$router.post("/sign-up", $809416b88052d20d$export$7200a869094fec36);
$06b374d3c618349c$var$router.post("/log-in", $809416b88052d20d$export$596d806903d1f59e);
$06b374d3c618349c$var$router.post("/forget-password", $809416b88052d20d$export$37ac0238687b67ae);
$06b374d3c618349c$var$router.patch("/reset-password/:token", $809416b88052d20d$export$dc726c8e334dd814);
$06b374d3c618349c$var$router.use($809416b88052d20d$export$eda7ca9e36571553);
$06b374d3c618349c$var$router.route("/me").get($ea576216cc1b168f$export$85d699ca8330b9a9).patch($ea576216cc1b168f$export$5880729c5d131040);
$06b374d3c618349c$var$router.patch("/update-my-password", $809416b88052d20d$export$e2853351e15b7895);
$06b374d3c618349c$var$router.route("/delivery").get($ea576216cc1b168f$export$cbfde3d083bf31b0).post($ea576216cc1b168f$export$16009ca59625b18f);
$06b374d3c618349c$exports = $06b374d3c618349c$var$router;


var $a44677b3cf1c810e$exports = {};

var $8affc0b7e33dd2e8$export$9828a7bc523db331;

var $06252100c3ce6813$exports = {};
$06252100c3ce6813$exports = JSON.parse('{"menu":[{"id":1,"name":"Margherita","unitPrice":12,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg","ingredients":["tomato","mozzarella","basil"],"soldOut":false},{"id":2,"name":"Capricciosa","unitPrice":14,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-2.jpg","ingredients":["tomato","mozzarella","ham","mushrooms","artichoke"],"soldOut":true},{"id":3,"name":"Romana","unitPrice":15,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-3.jpg","ingredients":["tomato","mozzarella","prosciutto"],"soldOut":false},{"id":4,"name":"Prosciutto e Rucola","unitPrice":16,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-4.jpg","ingredients":["tomato","mozzarella","prosciutto","arugula"],"soldOut":false},{"id":5,"name":"Diavola","unitPrice":16,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-5.jpg","ingredients":["tomato","mozzarella","spicy salami","chili flakes"],"soldOut":false},{"id":6,"name":"Vegetale","unitPrice":13,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-6.jpg","ingredients":["tomato","mozzarella","bell peppers","onions","mushrooms"],"soldOut":false},{"id":7,"name":"Napoli","unitPrice":16,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-7.jpg","ingredients":["tomato","mozzarella","fresh tomato","basil"],"soldOut":false},{"id":8,"name":"Siciliana","unitPrice":16,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-8.jpg","ingredients":["tomato","mozzarella","anchovies","olives","capers"],"soldOut":true},{"id":9,"name":"Pepperoni","unitPrice":14,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-9.jpg","ingredients":["tomato","mozzarella","pepperoni"],"soldOut":false},{"id":10,"name":"Hawaiian","unitPrice":15,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-10.jpg","ingredients":["tomato","mozzarella","pineapple","ham"],"soldOut":false},{"id":11,"name":"Spinach and Mushroom","unitPrice":15,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-11.jpg","ingredients":["tomato","mozzarella","spinach","mushrooms"],"soldOut":false},{"id":12,"name":"Mediterranean","unitPrice":16,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-12.jpg","ingredients":["tomato","mozzarella","sun-dried tomatoes","olives","artichoke"],"soldOut":false},{"id":13,"name":"Greek","unitPrice":16,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-13.jpg","ingredients":["tomato","mozzarella","spinach","feta","olives","pepperoncini"],"soldOut":true},{"id":14,"name":"Abruzzese","unitPrice":16,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-14.jpg","ingredients":["tomato","mozzarella","prosciutto","arugula"],"soldOut":false},{"id":15,"name":"Pesto Chicken","unitPrice":16,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-15.jpg","ingredients":["pesto","mozzarella","chicken","sun-dried tomatoes","spinach"],"soldOut":false},{"id":16,"name":"Eggplant Parmesan","unitPrice":15,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-16.jpg","ingredients":["marinara","mozzarella","eggplant","parmesan"],"soldOut":false},{"id":17,"name":"Roasted Veggie","unitPrice":15,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-17.jpg","ingredients":["marinara","mozzarella","zucchini","eggplant","peppers","onions"],"soldOut":false},{"id":18,"name":"Tofu and Mushroom","unitPrice":15,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-18.jpg","ingredients":["marinara","mozzarella","tofu","mushrooms","bell peppers"],"soldOut":false}]}');


$8affc0b7e33dd2e8$export$9828a7bc523db331 = $26fa6d4858ca3b3d$exports(async (req, res, next)=>{
    res.status(200).json({
        status: "success",
        data: $06252100c3ce6813$exports.menu
    });
});


const $a44677b3cf1c810e$var$router = $fwLjc$express.Router();
$a44677b3cf1c810e$var$router.get("/", $8affc0b7e33dd2e8$export$9828a7bc523db331);
$a44677b3cf1c810e$exports = $a44677b3cf1c810e$var$router;



const $29b9e99e269db72b$var$app = $fwLjc$express();
$29b9e99e269db72b$var$app.use($fwLjc$express.json({
    limit: "10kb"
}));
$29b9e99e269db72b$var$app.use("/api/v1/menu", $a44677b3cf1c810e$exports);
$29b9e99e269db72b$var$app.use("/api/v1/users", $06b374d3c618349c$exports);
$29b9e99e269db72b$var$app.all("*", (req, res, next)=>{
    next(new $a47d181581b6c561$exports(`Can't find ${req.originalUrl} on this server!`, 404));
});
$29b9e99e269db72b$exports = $29b9e99e269db72b$var$app;


const $a316d04772c6f149$var$DB = undefined.replace("<PASSWORD>", undefined);
$fwLjc$mongoose.connect($a316d04772c6f149$var$DB).then(()=>{
    console.log("DB connection successful!");
});
const $a316d04772c6f149$var$port = 3000;
const $a316d04772c6f149$var$server = $29b9e99e269db72b$exports.listen($a316d04772c6f149$var$port, ()=>{
    console.log(`App running on port ${$a316d04772c6f149$var$port}...`);
});


//# sourceMappingURL=main.js.map
