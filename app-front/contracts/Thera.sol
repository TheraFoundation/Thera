/**
 *Submitted for verification at Etherscan.io on 2020-09-18
*/

pragma solidity ^0.5.1;

/**
     * Thera.Foundation Emerald Smart Contract - Suite of foundings to develop the Amazon.
     * 
     * Each Thera reforests a tree among 2000 species of selected breed, some harness shadow others enroot water, others help life some bring bees.
     * To Receive Theras, Choose a TheraFounding of your Choose. Each TheraFounding also develops the bestest of technology in the Amazon Region.
     * All TheraFounding projects depend on each other to co-exist and co-evolve, TheraLaw helps connect TheraSpace with TheraTech, all Co-Developing.
     * There will be a total of 16 TheraFoundings, each will be Unpaused as team and infrastructure grow.
     * 
     * 
     * 
     */


//All Purpose Library to help with the math equations
library Math {
    function max(uint256 a, uint256 b) internal pure returns (uint256) {
        return a >= b ? a : b;
    }

    function min(uint256 a, uint256 b) internal pure returns (uint256) {
        return a < b ? a : b;
    }

    function average(uint256 a, uint256 b) internal pure returns (uint256) {
        // (a + b) / 2 can overflow, so we distribute
        return (a / 2) + (b / 2) + ((a % 2 + b % 2) / 2);
    }
}
library SafeMath {
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b <= a, "SafeMath: subtraction overflow");
        uint256 c = a - b;

        return c;
    }

    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        // Solidity only automatically asserts when dividing by 0
        require(b > 0, "SafeMath: division by zero");
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b != 0, "SafeMath: modulo by zero");
        return a % b;
    }
}

//All purpose contract giving ownership to Contract
contract Ownable {
    address payable private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    constructor () internal {
        _owner = msg.sender;
        emit OwnershipTransferred(address(0), _owner);
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view returns (address payable) {
        return _owner;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(isOwner(), "Ownable: caller is not the owner");
        _;
    }

    /**
     * @dev Returns true if the caller is the current owner.
     */
    function isOwner() public view returns (bool) {
        return msg.sender == _owner;
    }

    function transferOwnership(address payable newOwner) public onlyOwner {
        _transferOwnership(newOwner);
    }

    function _transferOwnership(address payable newOwner) internal {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }
}
//Erc20 Interface to negotatiate with open market in a standard giving more value and tradablilty 
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

// ERC20 Contract and directions of flow between ethereum, token and User.
contract ERC20 is IERC20 {
    using SafeMath for uint256;
    mapping (address => uint256) private _balances;
    mapping (address => mapping (address => uint256)) private _allowances;
    uint256 private _totalSupply;
    uint256 private constant MAXCAP = 1000000 * (10 ** uint256(18));

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }

    function transfer(address recipient, uint256 amount) public returns (bool) {
        _transfer(msg.sender, recipient, amount);
        return true;
    }

    function allowance(address owner, address spender) public view returns (uint256) {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 value) public returns (bool) {
        _approve(msg.sender, spender, value);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) public returns (bool) {
        _transfer(sender, recipient, amount);
        _approve(sender, msg.sender, _allowances[sender][msg.sender].sub(amount));
        return true;
    }

    function increaseAllowance(address spender, uint256 addedValue) public returns (bool) {
        _approve(msg.sender, spender, _allowances[msg.sender][spender].add(addedValue));
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool) {
        _approve(msg.sender, spender, _allowances[msg.sender][spender].sub(subtractedValue));
        return true;
    }

    function _transfer(address sender, address recipient, uint256 amount) internal {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");

        _balances[sender] = _balances[sender].sub(amount);
        _balances[recipient] = _balances[recipient].add(amount);
        emit Transfer(sender, recipient, amount);
    }

    function _mint(address account, uint256 amount) internal {
        require(account != address(0), "ERC20: mint to the zero address");
        require(amount + totalSupply() <= MAXCAP, "Max Cap: request for minting more than possible value");
        
        _totalSupply = _totalSupply.add(amount);
        _balances[account] = _balances[account].add(amount);
        emit Transfer(address(0), account, amount);
    }

    function _approve(address owner, address spender, uint256 value) internal {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = value;
        emit Approval(owner, spender, value);
    }

}

//Token Details with name, symbol and Decimals
contract ERC20Detailed is IERC20 {
    string private _name;
    string private _symbol;
    uint8 private _decimals;

    constructor (string memory name, string memory symbol, uint8 decimals) public {
        _name = name;
        _symbol = symbol;
        _decimals = decimals;
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function decimals() public view returns (uint8) {
        return _decimals;
    }
}

//Roles help store addresses and give them functions.
library Roles {
    struct Role {
        mapping (address => bool) bearer;
    }

    function add(Role storage role, address account) internal {
        require(!has(role, account), "Roles: account already has role");
        role.bearer[account] = true;
    }

    function remove(Role storage role, address account) internal {
        require(has(role, account), "Roles: account does not have role");
        role.bearer[account] = false;
    }

    function has(Role storage role, address account) internal view returns (bool) {
        require(account != address(0), "Roles: account is the zero address");
        return role.bearer[account];
    }
}
//The Pauser Role helps Pause the Contract.
contract PauserRole {
    using Roles for Roles.Role;

    event PauserAdded(address indexed account);
    event PauserRemoved(address indexed account);

    Roles.Role private _pausers;

    constructor () internal {
        _addPauser(msg.sender);
    }

    modifier onlyPauser() {
        require(isPauser(msg.sender), "PauserRole: caller does not have the Pauser role");
        _;
    }

    function isPauser(address account) public view returns (bool) {
        return _pausers.has(account);
    }

    function addPauser(address account) public onlyPauser {
        _addPauser(account);
    }

    function _addPauser(address account) internal {
        _pausers.add(account);
        emit PauserAdded(account);
    }

    function _removePauser(address account) internal {
        _pausers.remove(account);
        emit PauserRemoved(account);
    }
}

contract Pausable is PauserRole {
    event Paused(address account);
    event Unpaused(address account);
    bool private _paused;

    constructor () internal {
        _paused = false;
    }

    function paused() public view returns (bool) {
        return _paused;
    }

    modifier whenNotPaused() {
        require(!_paused, "Pausable: paused");
        _;
    }

    modifier whenPaused() {
        require(_paused, "Pausable: not paused");
        _;
    }

    function pause() public onlyPauser whenNotPaused {
        _paused = true;
        emit Paused(msg.sender);
    }

    function unpause() public onlyPauser whenPaused {
        _paused = false;
        emit Unpaused(msg.sender);
    }
}
contract MinterRole {
    using Roles for Roles.Role;

    event MinterAdded(address indexed account);
    event MinterRemoved(address indexed account);

    Roles.Role private _minters;

    constructor () internal {
        _addMinter(msg.sender);
    }

    modifier onlyMinter() {
        require(isMinter(msg.sender), "MinterRole: caller does not have the Minter role");
        _;
    }

    function isMinter(address account) public view returns (bool) {
        return _minters.has(account);
    }

    function addMinter(address account) public onlyMinter {
        _addMinter(account);
    }

    function _addMinter(address account) internal {
        _minters.add(account);
        emit MinterAdded(account);
    }

    function _removeMinter(address account) internal {
        _minters.remove(account);
        emit MinterRemoved(account);
    }
}
contract TheraSeeding is ERC20, MinterRole {
    function mint(address account, uint256 amount) public onlyMinter returns (bool) {
        _mint(account, amount);
        return true;
    }
}
library Address {
    function isContract(address account) internal view returns (bool) {
        uint256 size;
        // solhint-disable-next-line no-inline-assembly
        assembly { size := extcodesize(account) }
        return size > 0;
    }
}
library SafeERC20 {
    using SafeMath for uint256;
    using Address for address;

    function safeTransfer(IERC20 token, address to, uint256 value) internal {
        callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));
    }

    function safeTransferFrom(IERC20 token, address from, address to, uint256 value) internal {
        callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));
    }

    function safeApprove(IERC20 token, address spender, uint256 value) internal {
        require((value == 0) || (token.allowance(address(this), spender) == 0),
            "SafeERC20: approve from non-zero to non-zero allowance"
        );
        callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, value));
    }

    function safeIncreaseAllowance(IERC20 token, address spender, uint256 value) internal {
        uint256 newAllowance = token.allowance(address(this), spender).add(value);
        callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));
    }

    function safeDecreaseAllowance(IERC20 token, address spender, uint256 value) internal {
        uint256 newAllowance = token.allowance(address(this), spender).sub(value);
        callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));
    }

    function callOptionalReturn(IERC20 token, bytes memory data) private {
        require(address(token).isContract(), "SafeERC20: call to non-contract");

        // solhint-disable-next-line avoid-low-level-calls
        (bool success, bytes memory returndata) = address(token).call(data);
        require(success, "SafeERC20: low-level call failed");

        if (returndata.length > 0) { // Return data is optional
            // solhint-disable-next-line max-line-length
            require(abi.decode(returndata, (bool)), "SafeERC20: ERC20 operation did not succeed");
        }
    }
}
contract ReentrancyGuard {
    uint256 private _guardCounter;

    constructor () internal {
        _guardCounter = 1;
    }

    modifier nonReentrant() {
        _guardCounter += 1;
        uint256 localCounter = _guardCounter;
        _;
        require(localCounter == _guardCounter, "ReentrancyGuard: reentrant call");
    }
}

//Crowdsale for the Trees.
contract Crowdsale is ReentrancyGuard, Pausable {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;
    IERC20 private _token;
    address payable private _wallet;
    uint256 private _rate;
    uint256 private _weiRaised;

    event TokensPurchased(address indexed purchaser, address indexed beneficiary, uint256 value, uint256 amount);
    constructor (uint256 rate, address payable wallet, IERC20 token) public {
        require(rate > 0, "Crowdsale: rate is 0");
        require(wallet != address(0), "Crowdsale: wallet is the zero address");
        require(address(token) != address(0), "Crowdsale: token is the zero address");

        _rate = rate;
        _wallet = wallet;
        _token = token;
    }

    function () external payable {
        buyTokens(msg.sender, msg.value);
    }

    function token() public view returns (IERC20) {
        return _token;
    }

    function wallet() public view returns (address payable) {
        return _wallet;
    }

    function rate() public view returns (uint256) {
        return _rate;
    }

    function weiRaised() public view returns (uint256) {
        return _weiRaised;
    }

    function buyTokens(address beneficiary, uint256 weiAmount) public nonReentrant whenNotPaused payable {
         weiAmount = msg.value;
        _preValidatePurchase(beneficiary, weiAmount);

        // calculate token amount to be created
        uint256 tokens = _getTokenAmount(weiAmount);
        tokens = tokens.mul(10 ** uint256(18));
        // update state
        _weiRaised = _weiRaised.add(weiAmount);
        
        _processPurchase(beneficiary, tokens);
        emit TokensPurchased(msg.sender, beneficiary, weiAmount, tokens);

        _updatePurchasingState(beneficiary, weiAmount);

        _forwardFunds();
        _postValidatePurchase(beneficiary, weiAmount);
    }

    function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view {
        require(beneficiary != address(0), "Crowdsale: beneficiary is the zero address");
        require(weiAmount != 0, "Crowdsale: weiAmount is 0");
    }

    function _postValidatePurchase( address beneficiary, uint256 weiAmount) internal view {
        // solhint-disable-previous-line no-empty-blocks
    }

    function _deliverTokens(address beneficiary, uint256 tokenAmount) internal {
        _token.safeTransfer(beneficiary, tokenAmount);
    }

    function _processPurchase(address beneficiary, uint256 tokenAmount) internal {
        _deliverTokens(beneficiary, tokenAmount);
    }

    function _updatePurchasingState(address beneficiary, uint256 weiAmount) internal {
        // solhint-disable-previous-line no-empty-blocks
    }

    function _getTokenAmount(uint256 weiAmount) internal view returns (uint256) {
        return weiAmount.div(_rate);
    }

    function _forwardFunds() internal {
        _wallet.transfer(msg.value);
    }
}
contract TheraFounding is Crowdsale {
    function _deliverTokens(address beneficiary, uint256 tokenAmount) internal {
        // Potentially dangerous assumption about the type of the token.
        require(
            TheraSeeding(address(token())).mint(beneficiary, tokenAmount),
                "MintedCrowdsale: minting failed"
        );
    }
}

//Token Contract stabilized with Details, Minting qualitys and ownability.
contract Thera is ERC20, ERC20Detailed,TheraSeeding, Ownable, Pausable  {
    uint8 internal constant DECIMALS = 18;

    function() external payable {
    }
    
    function getBalance() public view returns(uint256) {
        return address(this).balance;
    }
    
    function withdrawEther() external onlyOwner {
        owner().transfer(getBalance());
    }
    
    constructor ()  public
     ERC20Detailed("Thera", "Thera", DECIMALS)  {
    }
}
//Minter Minting Contract seeding Theras for the purpose of developing Drone technology capable of automated reforestations.
contract TheraSeed is TheraFounding {
    uint256 internal constant RATE = 29060000000000000;
    
    constructor(address payable Wallet, address payable Token) public Crowdsale(RATE, Wallet, TheraSeeding(Token)) {
    }
}
//Minter Minting Contract seeding Theras for the purpose of developing Software and program like dapps to enhance all TheraFoundings.
contract TheraDev is TheraFounding {
    uint256 internal constant RATE = 29060000000000000;
    
    constructor(address payable Wallet, address payable Token) public Crowdsale(RATE, Wallet, TheraSeeding(Token)) {
    }
}
//Minter Minting Contract seeding Theras for the purpose of developing blockchain like market selling Amazonian products.
contract TheraMarket is TheraFounding {
    uint256 internal constant RATE = 29060000000000000;
    
    constructor(address payable Wallet, address payable Token) public Crowdsale(RATE, Wallet, TheraSeeding(Token)) {
    }
}

//Minter Minting Contract seeding Theras for the purpose of developing Disruptive technology and uniting multi-patent technologies for genesis like creations.
contract TheraTech is TheraFounding {
    uint256 internal constant RATE = 29060000000000000;
    
    constructor(address payable Wallet, address payable Token) public Crowdsale(RATE, Wallet, TheraSeeding(Token)) {
    }
}

//Minter Minting Contract seeding Theras for the purpose of developing Impactful Mega infrastructures in contact with nature in a sustainable way.
contract TheraConstruction is TheraFounding {
    uint256 internal constant RATE = 29060000000000000;
    
    constructor(address payable Wallet, address payable Token) public Crowdsale(RATE, Wallet, TheraSeeding(Token)) {
    }
}
//Minter Minting Contract seeding Theras for the purpose of developing Economical break through in the northern region of South America main basis of the the amazon Rainforest.
contract TheraEconomy is TheraFounding {
    uint256 internal constant RATE = 29060000000000000;
    
    constructor(address payable Wallet, address payable Token) public Crowdsale(RATE, Wallet, TheraSeeding(Token)) {
    }
}
//Minter Minting Contract seeding Theras for the purpose of developing Impactful Mega infrastructures in contact with nature in a sustainable way.
contract TheraLaw is TheraFounding {
    uint256 internal constant RATE = 29060000000000000;
    
    constructor(address payable Wallet, address payable Token) public Crowdsale(RATE, Wallet, TheraSeeding(Token)) {
    }
}
//Minter Minting Contract seeding Theras for the purpose of developing 0 point renewable Energy in the Amazon.
contract TheraEnergy is TheraFounding {
    uint256 internal constant RATE = 29060000000000000;
    
    constructor(address payable Wallet, address payable Token) public Crowdsale(RATE, Wallet, TheraSeeding(Token)) {
    }
}
//Minter Minting Contract seeding Theras for the purpose of developing Unique beauty products with flowers, smells and exotic fruits from the Amazon
contract TheraBeauty is TheraFounding {
    uint256 internal constant RATE = 29060000000000000;
    
    constructor(address payable Wallet, address payable Token) public Crowdsale(RATE, Wallet, TheraSeeding(Token)) {
    }
}
//Minter Minting Contract seeding Theras for the purpose of developing better connection among humanitarian crisis, ONGs and Diplomatic Affairs.
contract TheraGov is TheraFounding {
    uint256 internal constant RATE = 39060000000000000;
    
    constructor(address payable Wallet, address payable Token) public Crowdsale(RATE, Wallet, TheraSeeding(Token)) {
    }
}
//Minter Minting Contract seeding Theras for the purpose of developing fiber optic connections around the Amazon with the evolution of the people in focus.
contract TheraNet is TheraFounding {
    uint256 internal constant RATE = 29060000000000000;
    
    constructor(address payable Wallet, address payable Token) public Crowdsale(RATE, Wallet, TheraSeeding(Token)) {
    }
}
//Minter Minting Contract seeding Theras for the purpose of developing Medicine and BioTech To cure the world from diseases with the rich Natural resources from the Amazon
contract TheraBioTech is TheraFounding {
    uint256 internal constant RATE = 29060000000000000;
    
    constructor(address payable Wallet, address payable Token) public Crowdsale(RATE, Wallet, TheraSeeding(Token)) {
    }
}
//Minter Minting Contract seeding Theras for the purpose of developing art, music,events, festivals and entertainment like business to expand marketing and visiability.
contract TheraArt is TheraFounding {
    uint256 internal constant RATE = 29060000000000000;
    
    constructor(address payable Wallet, address payable Token) public Crowdsale(RATE, Wallet, TheraSeeding(Token)) {
    }
}
//Minter Minting Contract founding Theras for the purpose of developing robotic technology to further take man and machine together. 
contract TheraRobotic is TheraFounding {
    uint256 internal constant RATE = 29060000000000000;
    
    constructor(address payable Wallet, address payable Token) public Crowdsale(RATE, Wallet, TheraSeeding(Token)) {
    }
}
//Minter Minting Contract seeding Theras for the purpose of developing space technology in the Amazon Equatoria Line with universal launches in perspective and fuel saving
contract TheraSpace is TheraFounding {
    uint256 internal constant RATE = 29060000000000000;
    
    constructor(address payable Wallet, address payable Token) public Crowdsale(RATE, Wallet, TheraSeeding(Token)) {
    }
}
//Minter Minting Contract seeding Theras for the purpose of developing Unique Niobium like studies to protect earths resources through use of metal mixing and saving.
contract TheraMining is TheraFounding {
    uint256 internal constant RATE = 29060000000000000;
    
    constructor(address payable Wallet, address payable Token) public Crowdsale(RATE, Wallet, TheraSeeding(Token)) {
    }
}