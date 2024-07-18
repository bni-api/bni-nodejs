import bniClient from './lib/bniClient.js';
import oneGatePayment from './lib/api/oneGatePayment.js';
import snapBI from './lib/api/snapBI.js';
import RDN from './lib/api/rdn.js';
import RDL from './lib/api/rdl.js';
import RDF from './lib/api/rdf.js';
import bniMove from './lib/api/bniMove.js';
import ecollection from './lib/api/ecollection.js';
import BNIDIRECT from './lib/api/bnidirect.js';

export const BNIClient = bniClient;
export const OneGatePayment = oneGatePayment;
export const SnapBI = snapBI;
export const Rdn = RDN;
export const Rdl = RDL;
export const Rdf = RDF;
export const BNIMove = bniMove;
export const Ecollection = ecollection;
export const BniDirect = BNIDIRECT;
